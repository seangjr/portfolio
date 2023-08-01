import { useRef, RefObject, useEffect } from "react";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import useDrawer, { removeEvent, toggleDrawer } from "../hooks/useDrawer";

export function addBlendHeader() {
    const header = document.getElementById("js-header");
    if (header?.classList.contains("is-blend-normal")) {
        header?.classList.remove("is-blend-normal");
    }
}

export function removeBlendHeader() {
    const header = document.getElementById("js-header");
    header?.classList.add("is-blend-normal");
}

export function pageTransitionHeader(header: RefObject<HTMLDivElement>) {
    if (header.current) {
        header.current.classList.add("is-slide-border");
        setTimeout(() => {
            header.current &&
                header.current.classList.remove("is-slide-border");
        }, 1000);
    }
}

export function scrollHide(header: RefObject<HTMLDivElement>) {
    const mediaQueryList = window.matchMedia("(min-width: 1025px)");
    let scrollPoint = 0;
    let lastPoint = 100;

    const listener = () => {
        if (!mediaQueryList.matches) {
            addEventListener("scroll", () => {
                scrollPoint = window.scrollY;
                if (scrollPoint >= lastPoint && scrollPoint > 100) {
                    header.current
                        ? (header.current.style.transform =
                              "translate(-50%, -90%)")
                        : "";
                } else {
                    header.current
                        ? (header.current.style.transform =
                              "translate(-50%, 0px)")
                        : "";
                }
                lastPoint = scrollPoint;
            });
        }
    };

    window.addEventListener("scroll", listener);
}

const Header = () => {
    const jsHeader = useRef<HTMLDivElement>(null);
    const drawerButton = useRef<HTMLButtonElement>(null);
    const drawerNav = useRef<HTMLDivElement>(null);
    useDrawer(jsHeader, drawerButton, drawerNav);
    useEffect(() => {
        pageTransitionHeader(jsHeader);
        scrollHide(jsHeader);
    });
    return (
        <>
            <header
                ref={jsHeader}
                id="js-header"
                className="l-header p-header"
                style={{ transform: "translate(-50%, 0px)" }}
            >
                <div className="p-header__inner">
                    <p className="p-header__logo">
                        <Link
                            href="/"
                            className="p-header__logo-link"
                            prefetch={false}
                            onClick={() => removeEvent(drawerButton, drawerNav)}
                        >
                            {" "}
                            <span className="p-header__logo-text">SEAN</span>
                            <span className="p-header__logo-change">
                                <span className="p-header__logo-head">
                                    &copy;{new Date().getFullYear()}
                                </span>
                                <span className="p-header__logo-foot">
                                    Relampagos
                                </span>
                            </span>
                        </Link>
                    </p>
                    <div className="p-header__contents u-hidden-md-down">
                        <nav className="p-header__nav p-global-nav">
                            <ul className="p-global-nav__list">
                                <li className="p-global-nav__item">
                                    <Link
                                        href="/about/"
                                        prefetch={false}
                                        className="p-global-nav__link"
                                    >
                                        ABOUT
                                    </Link>
                                </li>
                                <li className="p-global-nav__item">
                                    <Link
                                        href="/contact/"
                                        prefetch={false}
                                        className="p-global-nav__link"
                                    >
                                        CONTACT
                                    </Link>
                                </li>
                                <li className="p-global-nav__item">
                                    <a
                                        href="https://youtu.be/dQw4w9WgXcQ"
                                        className="p-global-nav__link p-global-nav__link--blank"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        BLOG
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <ul className="p-header__sns p-header-sns">
                            <li className="p-header-sns__item">
                                <a
                                    href="https://twitter.com/spaysheeps"
                                    className="p-header-sns__link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="u-visually-hidden">
                                        Twitter
                                    </span>
                                    <FaTwitter
                                        size={20}
                                        className="c-svg p-header-sns__svg"
                                    />
                                </a>
                            </li>
                            <li className="p-header-sns__item">
                                <a
                                    href="https://linkedin.com/in/sean-relampagos"
                                    className="p-header-sns__link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="u-visually-hidden">
                                        LinkedIn
                                    </span>
                                    <FaLinkedinIn
                                        size={20}
                                        className="c-svg p-header-sns__svg"
                                    />
                                </a>
                            </li>
                            <li className="p-header-sns__item">
                                <a
                                    href="https://github.com/seangjr"
                                    className="p-header-sns__link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="u-visually-hidden">
                                        GitHub
                                    </span>
                                    <FaGithub
                                        size={20}
                                        className="c-svg p-header-sns__svg"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button
                        type="button"
                        id="js-drawer-button"
                        ref={drawerButton}
                        onClick={(): void =>
                            toggleDrawer(drawerButton, drawerNav)
                        }
                        className="p-header__button c-button-drawer u-hidden-md-up"
                        aria-controls="js-drawer-nav"
                        aria-expanded="false"
                    >
                        <span className="c-button-drawer__line"></span>
                    </button>
                </div>
            </header>
            <div
                ref={drawerNav}
                id="js-drawer-nav"
                className="p-drawer-nav u-hidden-md-up"
                aria-hidden="true"
            >
                <div className="p-drawer-nav__inner">
                    <ul className="p-drawer-nav__list">
                        <li className="p-drawer-nav__item">
                            <Link
                                className="p-drawer-nav__link"
                                href="/about/"
                                onClick={(): void =>
                                    toggleDrawer(drawerButton, drawerNav)
                                }
                            >
                                ABOUT ME
                            </Link>
                        </li>
                        <li className="p-drawer-nav__item">
                            <Link
                                href="/contact/"
                                className="p-drawer-nav__link"
                                onClick={(): void =>
                                    toggleDrawer(drawerButton, drawerNav)
                                }
                            >
                                CONTACT
                            </Link>
                        </li>
                        <li className="p-drawer-nav__item">
                            <a
                                href="https://youtu.be/dQw4w9WgXcQ"
                                className="p-drawer-nav__link p-drawer-nav__link--blank"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(): void =>
                                    toggleDrawer(drawerButton, drawerNav)
                                }
                            >
                                BLOG
                                <svg
                                    className="c-svg p-drawer-nav__svg"
                                    width="23"
                                    height="23"
                                    viewBox="0 0 14 14"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <title>arrow-up-right</title>
                                    <g
                                        id="Page-1"
                                        stroke="none"
                                        strokeWidth="1"
                                        fill="none"
                                        fillRule="evenodd"
                                    >
                                        <g
                                            id="Artboard"
                                            transform="translate(-1019.000000, -279.000000)"
                                            stroke="#000"
                                            strokeWidth="1.5"
                                        >
                                            <g
                                                id="arrow-up-right"
                                                transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)"
                                            >
                                                <polyline
                                                    id="href"
                                                    points="2.76923077 0 12 0 12 9.23076923"
                                                ></polyline>
                                                <line
                                                    x1="12"
                                                    y1="0"
                                                    x2="0"
                                                    y2="12"
                                                    id="href"
                                                ></line>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <p className="p-drawer-nav__text">FOLLOW ME</p>
                    <ul className="p-drawer-nav__sns p-sns">
                        <li className="p-sns__item">
                            <a
                                href="https://twitter.com/spaysheeps"
                                className="p-sns__link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="u-visually-hidden">
                                    Twitter
                                </span>
                                <FaTwitter
                                    size={20}
                                    className="c-svg p-sns__svg"
                                />
                                <span className="p-sns__border"></span>
                            </a>
                        </li>
                        <li className="p-sns__item">
                            <a
                                href="https://linkedin.com/in/sean-relampagos"
                                className="p-sns__link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="u-visually-hidden">
                                    LinkedIn
                                </span>
                                <FaLinkedinIn
                                    size={20}
                                    className="c-svg p-sns__svg"
                                />
                                <span className="p-sns__border"></span>
                            </a>
                        </li>
                        <li className="p-sns__item">
                            <a
                                href="https://github.com/seangjr"
                                className="p-sns__link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="u-visually-hidden">
                                    GitHub
                                </span>
                                <FaGithub
                                    size={20}
                                    className="c-svg p-sns__svg"
                                />
                                <span className="p-sns__border"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;
