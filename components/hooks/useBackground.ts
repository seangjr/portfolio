import { RefObject, useEffect } from "react";
import { ScrollObserver } from "../../scripts/intersectionObserver/scrollObserver";
import { addBlendHeader, removeBlendHeader } from "../layout/_header";
export default function useBackground(div: RefObject<HTMLDivElement>) {
    useEffect(() => {
        if (div.current) {
            const changeBgElement = div.current;
            let primaryColor = changeBgElement?.dataset.bg;
            const borders = Array.from(document.getElementsByClassName("p-works-overview__heading") as HTMLCollectionOf<HTMLElement>)
            const _init = (elements: any, isIntersecting: boolean) => {
                if (isIntersecting) {
                    changeBgElement.style.backgroundColor = `${primaryColor}`;
                    changeBgElement.style.color = "#fff";
                    borders.forEach((border) => {
                        border.style.borderColor = "#fff";
                    })
                } else {
                    if (changeBgElement !== null) {
                        changeBgElement.style.backgroundColor = "#fff";
                        changeBgElement.style.color = "#000";
                        borders.forEach((border) => {
                            border.style.borderColor = "#000";
                        })
                    }
                }
            }
            const observer = new ScrollObserver('#js-switching-trigger', _init, {rootMargin: "-50% 0px -50% 0px"});
        }
        removeBlendHeader()
        return () => {
            addBlendHeader()
        }
    }, [])
}