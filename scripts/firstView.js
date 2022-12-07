/* eslint-disable import/no-anonymous-default-export */
export function firstViewTrigger() {
    const firstViewElement = document.getElementById("js-first-view");
    firstViewElement.classList.add("is-inview");
}

export function removeFirstView() {
    const firstViewElement = document.getElementById("js-first-view");
    firstViewElement.classList.remove("is-inview");
}
