import Layout from "../components/layout/main";

import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

import "../styles/styles.scss";

// Javascript Files
import { firstViewTrigger, removeFirstView } from "../scripts/firstView";
import addClassIntersection from "../scripts/intersectionObserver/addClassIntersection";
import followContents from "../scripts/intersectionObserver/followContents";
import slideUpLines from "../scripts/slide-up-lines";

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        removeFirstView();
        addClassIntersection();
        followContents();
        slideUpLines();
    });
    useEffect(() => {
        firstViewTrigger();
    });
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="Welcome to Sean's portfolio website!"
                />
                <meta name="author" content="Sean Relampagos" />
                <meta name="author" content="seangjr_" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@spaysheeps" />
                <meta name="twitter:creator" content="@spaysheeps" />
                <meta name="twitter:image" content="/card.jpeg" />
                <meta
                    property="og:site_name"
                    content="Sean's portfolio website!"
                />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/card.jpeg" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/favicon.png" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
