import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";

import useBackground from "../components/hooks/useBackground";
import type { Details } from "../components/types";

import { FaExternalLinkAlt } from "react-icons/fa";

interface Props {
    details: Details;
}

const SingleWorkItem = ({ details }: Props) => {
    const container = useRef<HTMLDivElement>(null);
    useBackground(container);
    return (
        <>
            <Head>
                <title>{details.workdetails.title} | Sean Relampagos</title>
            </Head>
            <main
                className="l-single-works p-single-works"
                data-bg={details.workdetails.dataBg}
                ref={container}
            >
                <div className="l-container l-container--small">
                    <div id="js-switching-trigger">
                        <div
                            id="js-first-view"
                            className="l-single-works__first-view"
                        >
                            <div className="p-single-works__heading c-single-heading">
                                <h1
                                    className="p-single-works__heading-en is-wrap"
                                    style={{ transform: "translate(0px, 0px)" }}
                                >
                                    <span className="is-slide-up">
                                        {details.workdetails.title}
                                    </span>
                                </h1>
                                <p className="p-single-works__category is-wrap">
                                    <span className="is-slide-up u-delay05">
                                        {details.workdetails.category}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div
                            className="p-single-works__mockups"
                            style={{ transform: "translate(0px, 0px)" }}
                        >
                            <picture
                                className="p-single-works__mockup p-single-works__mockup--sp"
                                data-scroll
                                data-scroll-speed="1"
                                data-scroll-delay="0.1"
                            >
                                <Image
                                    src={details.mockupImageSp.url}
                                    className="p-single-works__mockup-img"
                                    alt={details.mockupImageSp.url}
                                    width="140"
                                    height="282"
                                    decoding="async"
                                />
                            </picture>

                            <picture
                                className="p-single-works__mockup p-single-works__mockup--pc"
                                data-scroll
                                data-scroll-speed="0.5"
                            >
                                <Image
                                    src={details.mockupImagePc.url}
                                    alt=""
                                    className="p-single-works__mockup-img"
                                    width="1898"
                                    height="1622"
                                    decoding="async"
                                />
                            </picture>

                            <picture
                                className="p-single-works__mockup p-single-works__mockup--tab"
                                data-scroll
                                data-scroll-speed="0.75"
                                data-scroll-delay="0.05"
                            >
                                <Image
                                    src={details.mockupImageTab.url}
                                    alt=""
                                    className="p-single-works__mockup-img"
                                    width={445}
                                    height={622}
                                    decoding="async"
                                />
                            </picture>
                        </div>
                        <div
                            className="p-single-works__info"
                            style={{ transform: "translate(0px, 0px)" }}
                        >
                            <section className="p-single-works__overview p-works-overview">
                                <h2 className="p-works-overview__heading">
                                    LINKS
                                </h2>
                                <div className="p-works-overview__body">
                                    <dl className="p-works-overview__dl">
                                        <div className="p-works-overview__row">
                                            <dt className="p-works-overview__dt">
                                                Site Url
                                            </dt>
                                            <dd className="p-works-overview__dd">
                                                <a
                                                    href={details.siteUrl}
                                                    className="p-works-overview__link"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{
                                                        transform:
                                                            "translate(0px, 0px)",
                                                    }}
                                                >
                                                    {details.siteUrl}
                                                    <FaExternalLinkAlt
                                                        className="c-svg p-works-overview__svg"
                                                        width={14}
                                                        height={14}
                                                        role="img"
                                                    />
                                                </a>
                                            </dd>
                                        </div>
                                        <div className="p-works-overview__row">
                                            <dt className="p-works-overview__dt">
                                                Source
                                            </dt>
                                            <dd className="p-works-overview__dd">
                                                <a
                                                    href={details.source}
                                                    className="p-works-overview__link"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{
                                                        transform:
                                                            "translate(0px, 0px)",
                                                    }}
                                                >
                                                    {details.source}
                                                    <FaExternalLinkAlt
                                                        className="c-svg p-works-overview__svg"
                                                        width={14}
                                                        height={14}
                                                        role="img"
                                                    />
                                                </a>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </section>
                            <section className="p-single-works__overview p-works-overview">
                                <h2 className="p-works-overview__heading">
                                    OVERVIEW
                                </h2>
                                <div className="p-works-overview__body">
                                    <p className="p-works-overview__text">
                                        {details.overview}
                                    </p>
                                </div>
                            </section>
                        </div>

                        <picture
                            className="p-single-works__picture p-single-works__picture--wide"
                            style={{ transform: "translate(0px, 0px)" }}
                        >
                            <Image
                                src={details.projectImageWide.url}
                                alt=""
                                className="p-single-works__img"
                                width={1920}
                                height={1333}
                                loading="lazy"
                                data-scroll
                                data-scroll-speed="-1"
                            />
                        </picture>

                        <div className="l-single-works__detail">
                            <section
                                className="p-single-works__detail p-works-detail"
                                data-scroll
                                data-scroll-sticky
                                data-scroll-target="#js-capture"
                            >
                                <div className="p-works-detail__inner">
                                    <h2
                                        className="p-works-detail__heading"
                                        style={{
                                            transform: "translate(0px, 0px)",
                                        }}
                                    >
                                        DETAILS
                                    </h2>
                                    <div className="p-works-detail__body">
                                        <dl className="p-works-detail__dl">
                                            <div className="p-works-detail__row">
                                                <dt className="p-works-detail__dt">
                                                    Role
                                                </dt>
                                                <dd className="p-works-detail__dd">
                                                    {details.role}
                                                </dd>
                                            </div>
                                            <div className="p-works-detail__row">
                                                <dt className="p-works-detail__dt">
                                                    Production Date
                                                </dt>
                                                <dd className="p-works-detail__dd">
                                                    {
                                                        details.productionDate.split(
                                                            "T",
                                                        )[0]
                                                    }
                                                </dd>
                                            </div>
                                            <div className="p-works-detail__row">
                                                <dt className="p-works-detail__dt">
                                                    Production Duration
                                                </dt>
                                                <dd className="p-works-detail__dd">
                                                    {details.productionDuration}
                                                </dd>
                                            </div>
                                            <div className="p-works-detail__row">
                                                <dt className="p-works-detail__dt">
                                                    Languages
                                                </dt>
                                                <dd className="p-works-detail__dd">
                                                    {details.languages}
                                                </dd>
                                            </div>
                                            <div className="p-works-detail__row">
                                                <dt className="p-works-detail__dt">
                                                    Tools
                                                </dt>
                                                <dd className="p-works-detail__dd">
                                                    {details.tools}
                                                </dd>
                                            </div>
                                            <div className="p-works-detail__row">
                                                <dt className="p-works-detail__dt">
                                                    Note:
                                                </dt>
                                                <dd className="p-works-detail__dd">
                                                    It&apos;s random images for
                                                    now because I haven&apos;t
                                                    got the real designs yet.
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </section>
                            <div className="p-single-works__captures">
                                <picture
                                    className="p-single-works__capture"
                                    style={{ transform: "translate(0px, 0px)" }}
                                >
                                    <img
                                        src="https://picsum.photos/816/2592"
                                        alt=""
                                        loading="lazy"
                                        className="p-single-works__capture-img"
                                    />
                                </picture>
                                <div
                                    className="p-single-works__capture-mask"
                                    id="js-capture"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default SingleWorkItem;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const res = await fetch("http://admin.seangjr.me/api/details");
    const { docs } = await res.json();
    const details = docs.find((doc: { workdetails: { slug: any } }) => {
        return doc.workdetails.slug == params?.slug;
    });
    console.log(details);
    return {
        props: {
            details,
        },
    };
};
