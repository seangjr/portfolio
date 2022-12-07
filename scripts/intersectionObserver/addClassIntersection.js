/* eslint-disable import/no-anonymous-default-export */
import { ScrollObserver } from "./scrollObserver";

export default () => {
    const _init = (elements, isIntersecting) => {
        if (isIntersecting) {
            elements.classList.add("is-inview");
        }
    };
    const scrollObserver = new ScrollObserver(".js-trigger", _init, {
        root: null,
        rootMargin: "-40% 0px",
        threshold: 0,
    });
};
