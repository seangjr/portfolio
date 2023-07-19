import Head from "next/head";

import { WorkDetails, WorkImage } from "../components/_works";
import type { Work } from "../components/types";
import { works } from "../components/data/works.json";

export default function Home() {
    return (
        <>
            <Head>
                <title>Sean Relampagos</title>
            </Head>
            <div className="l-home" data-barba-namespace="home">
                <div className="l-container">
                    <section
                        id="js-first-view"
                        className="p-first-view l-home__first-view"
                    >
                        <div className="p-first-view__inner">
                            <h1
                                className="p-first-view__heading"
                                style={{ transform: "translate(0px, 0px)" }}
                            >
                                <span className="is-wrap">
                                    <span className="is-slide-up">SEAN</span>
                                </span>
                                <span className="is-wrap">
                                    <span className="is-slide-up u-delay01">
                                        RELAMPAGOS
                                        <span className="u-hidden-md-down"></span>
                                    </span>
                                </span>
                            </h1>
                            <span
                                className="is-wrap"
                                style={{ transform: "translate(0px, 0px)" }}
                            >
                                <p className="p-first-view__text is-slide-up u-delay04">
                                    Software Engineer based in Singapore
                                </p>
                            </span>
                            <p className="p-first-view__information js-slide-up-row"></p>
                        </div>
                    </section>
                    <section className="p-home-about l-home__about">
                        <h2
                            className="p-home-about__heading u-hidden-lax-down"
                            data-scroll
                            data-scroll-speed="-0.7"
                            data-scroll-direction="horizontal"
                        >
                            Software Engineer
                        </h2>
                        <div className="p-home-about__profile">
                            <h3 className="p-home-about__name">
                                <span className="p-home-about__name-en">
                                    Sean Relampagos
                                </span>
                            </h3>
                            <p className="p-home-about__text">
                                Born in 2004, Nueva Ecija, Philippines.
                                <br />
                                I&apos;m a sophomore Computer Science student
                                pursuing a career in software engineering. I
                                create cutting-edge websites and applications
                                with a focus on performance and accessibility,
                                while maintaining a strong emphasis on design.
                            </p>
                            <div className="p-home-about__link-wrapper">
                                <a href="/about" className="c-button-primary">
                                    <span className="c-button-primary__text">
                                        <span
                                            className="c-button-primary__text-inner"
                                            data-text="About me"
                                        >
                                            View more
                                        </span>
                                    </span>
                                    <span className="c-button-primary__line"></span>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="l-container l-container--large">
                    <section className="p-works l-home__works">
                        <h2 className="u-visually-hidden">Works</h2>
                        <div className="p-works__inner">
                            <ul
                                className="p-works__contents u-hidden-lax-down"
                                data-scroll
                                data-scroll-sticky
                                data-scroll-target="#js-works-mask"
                            >
                                {works.map((work) => (
                                    <WorkDetails
                                        work={work}
                                        key={work.dataId}
                                    />
                                ))}
                            </ul>

                            <div className="p-works__items">
                                {works.map((work) => (
                                    <WorkImage work={work} key={work.dataId} />
                                ))}
                            </div>
                            <div
                                id="js-works-mask"
                                className="p-works__mask"
                            ></div>
                        </div>
                    </section>
                </div>
                <a
                    href="/about/"
                    className="p-contact-connect"
                    style={{ transform: "translate(0px, 0px)" }}
                >
                    <p className="p-contact-connect__text-wrapper">
                        <span
                            className="p-contact-connect__text"
                            data-text="About Me"
                        >
                            About Me
                        </span>
                    </p>
                </a>
            </div>
        </>
    );
}
