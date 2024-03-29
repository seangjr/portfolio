import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Header from "../components/layout/_header";
import Footer from "../components/layout/_footer";
import Link from "next/link";
import Transition from "../components/transition";
const Page404 = () => {
    const containerRef = useRef(null)
    return (
        <LocomotiveScrollProvider
            options={{
                smooth: true,
                lerp: 0.075,
            }} 
            watch={[]}
            containerRef={containerRef}
        >
        <main className="p-contact" ref={containerRef} data-scroll-container>
            <Header />
            <div className="l-container">
                <div id="js-first-view" className="p-contact__thanks-fv">
                    <h1 className="c-page-heading">
                        <span className="c-page-heading__en c-page-heading__en--contact is-wrap">
                            <span className="is-slide-up">Error 404</span>
                        </span>
                        <span className="c-page-heading__en c-page-heading__en--contact is-wrap u-hidden-md-down">
                            <span className="is-slide-up u-delay01">
                                Page not found
                            </span>
                        </span>
                    </h1>
                </div>
                <div className="p-contact__thanks">
                    <section className="p-contact-thanks">
                        <div className="p-contact-thanks__inner">
                            <div data-scroll data-scroll-speed="-0.5">
                                <span className="p-contact-thanks__arrow is-wrap">
                                    <svg
                                        className="p-contact-thanks__arrow-svg is-slide-up u-delay04"
                                        width="24px"
                                        height="24px"
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
                                                        id="Path"
                                                        points="2.76923077 0 12 0 12 9.23076923"
                                                    ></polyline>
                                                    <line
                                                        x1="12"
                                                        y1="0"
                                                        x2="0"
                                                        y2="12"
                                                        id="Path"
                                                    ></line>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                            <p className="p-contact-thanks__text js-slide-up-row">
                                You&apos;re in the wrong place!
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            <Link
                href="/"
                className="p-contact-connect"
                style={{ transform: "translate(0px, 0px)" }}
            >
                <p className="p-contact-connect__text-wrapper">
                    <span className="p-contact-connect__text" data-text="Home">
                        Home
                    </span>
                </p>
            </Link>
            <Footer />
        </main>
        </LocomotiveScrollProvider>
    );
};

export default Transition(Page404);
