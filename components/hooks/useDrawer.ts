import { useEffect } from 'react'
import type { RefObject } from 'react';

export function removeEvent(drawerButton: any, drawerNav: any) {
    drawerButton.current.setAttribute('aria-expanded', 'false')
    drawerNav.current.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-drawer-active");
}

export function toggleDrawer(drawerButton: any, drawerNav: any) {
    if (drawerButton.current.getAttribute("aria-expanded") === "false") {
        drawerButton.current.setAttribute("aria-expanded", "true");
        drawerNav.current.setAttribute("aria-hidden", "false");
        document.body.classList.add("is-drawer-active");
    } else {
        removeEvent(drawerButton, drawerNav);
    }
}

export default function useDrawer(jsHeader: any, drawerButton: any, drawerNav: any) {
    function setFillHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    useEffect(() => {
        setFillHeight();
        window.addEventListener("resize", setFillHeight);
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                jsHeader.current.classList.add("is-fixed");
            } else {
                jsHeader.current.classList.remove("is-fixed");
            }
        });
        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) {
                removeEvent(drawerButton, drawerNav);
            }
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}