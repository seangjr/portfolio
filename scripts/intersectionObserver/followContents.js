/* eslint-disable import/no-anonymous-default-export */
import { ScrollObserver } from "./scrollObserver";

export default () => {
    const _init = (elements, isIntersecting) => {
        if (isIntersecting) {
            const currentActiveIndex = document.querySelector(".is-show");
            if (currentActiveIndex !== null) {
                currentActiveIndex.classList.remove("is-show");
            }

            const newActiveIndex = document.querySelector(
                `[data-id='#${elements.id}']`,
            );
            newActiveIndex.classList.add("is-show");
        } else {
            const newRemoveIndex = document.querySelector(
                `[data-id='#${elements.id}']`,
            );
            if (newRemoveIndex !== null) {
                newRemoveIndex.classList.remove("is-show");
            }
        }
    };
    const scrollObserver = new ScrollObserver(".js-follow-targets", _init);
};
