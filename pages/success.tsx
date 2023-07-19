import Head from "next/head";
const Success = () => {
    return (
        <>
            <Head>
                <title>SUCCESS | Sean Relampagos</title>
            </Head>
            <main
                className="p-contact"
                data-barba="container"
                data-barba-namespace="contact"
            >
                <div className="l-container">
                    <div id="js-first-view" className="p-contact__thanks-fv">
                        <h1 className="c-page-heading">
                            <span className="c-page-heading__en c-page-heading__en--contact is-wrap">
                                <span className="is-slide-up">
                                    Thank you <br />
                                    &nbsp;&nbsp;for your inquiry.
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
                                    Thank you!
                                    <br />
                                    I have received your inquiry. I will reply
                                    to you as soon as possible.
                                    <br />
                                    If I do not reply within 3 days, please
                                    contact me again via email.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
                <a
                    href="/"
                    className="p-contact-connect"
                    style={{ transform: "translate(0px, 0px)" }}
                >
                    <p className="p-contact-connect__text-wrapper">
                        <span
                            className="p-contact-connect__text"
                            data-text="Home"
                        >
                            Home
                        </span>
                    </p>
                </a>
            </main>
        </>
    );
};

export default Success;
