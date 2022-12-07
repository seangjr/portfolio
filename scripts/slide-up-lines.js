const slideUpLines = () => {
    const slideUpRowTexts = document.querySelectorAll(".js-slide-up-row");
    if (slideUpRowTexts.length > 0) {
        const textSlideUpAutoAnime = (target) => {
            const texts = target.querySelectorAll(".js-slide-up-row__text");
            texts.forEach((text, index) => {
                text.animate(
                    {
                        transform: "translateY(0)",
                    },
                    {
                        fill: "forwards", //アニメーション後に値を維持する
                        duration: 1600, //アニメーション時間
                        easing: "cubic-bezier(.23, 1, .32, 1)", //イージング
                        delay: index * 100, //行ごとの遅延時間
                    },
                );
            });
        };

        slideUpRowTexts.isFinished = false;

        const animation = () => {
            slideUpRowTexts.forEach((el) => {
                textSlideUpAutoAnime(el);
                el.isFinished = true;
            });
        };

        const setUpText = (slideUpRowText, baseText) => {
            let html =
                '<span class="js-slide-up-row__base" aria-hidden="true">' +
                baseText +
                '</span><span class="u-visually-hidden">' +
                baseText +
                "</span>";

            const textHeight = slideUpRowText.clientHeight;

            const styles = getComputedStyle(slideUpRowText);
            let lineHeight = styles.lineHeight;
            if (lineHeight === "normal") {
                slideUpRowText.insertAdjacentHTML(
                    "beforeend",
                    '<span class="js-slide-up-row__checker" aria-hidden="true">　</span>',
                );
                lineHeight = slideUpRowText.querySelector(
                    ".js-slide-up-row__checker",
                ).clientHeight;
            } else {
                lineHeight = parseFloat(lineHeight);
            }

            const row = textHeight / lineHeight;

            let translateY = textHeight;
            if (slideUpRowText.isFinished) {
                translateY = 0;
            }
            for (let i = 0; i < row; i++) {
                const insetTop = lineHeight * i;
                let insetBottom = textHeight - lineHeight * (i + 1);
                if (insetBottom < 0) {
                    insetBottom = 0;
                }
                html +=
                    '<span class="js-slide-up-row__line" aria-hidden="true" style="clip-path: inset(' +
                    insetTop +
                    "px 0 " +
                    insetBottom +
                    'px)"><span class="js-slide-up-row__text" style="clip-path: inset(' +
                    insetTop +
                    "px 0 " +
                    insetBottom +
                    "px);transform: translateY(" +
                    translateY +
                    'px)">' +
                    baseText +
                    "</span></span>";
            }

            slideUpRowText.textContent = "";
            slideUpRowText.insertAdjacentHTML("beforeend", html);
            slideUpRowText.classList.add("is-setup");
        };

        slideUpRowTexts.forEach((slideUpRowText) => {
            const baseText = slideUpRowText.innerHTML;

            setUpText(slideUpRowText, baseText);

            const resizeObserver = new ResizeObserver(() => {
                setUpText(slideUpRowText, baseText);
            });
            resizeObserver.observe(slideUpRowText, slideUpRowText);
        });

        setTimeout(() => {
            animation();
        }, 400);
    }
};

export default slideUpLines;
