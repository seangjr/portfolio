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
                    content="Sean is a fullstack engineer with a passion for creating beautiful and functional websites. While he is studying Computer Science, he is also working as a frontend engineer at a startup in Kuala Lumpur, Malaysia."
                />
                <meta
                    name="keywords"
                    content="Sean Relampagos, Sean, Relampagos, Sean Relampagos Portfolio, Sean Relampagos Website, Sean Relampagos Web Developer, Sean Relampagos Web Designer, Sean Relampagos Fullstack Engineer, Sean Relampagos Fullstack Developer, Sean Relampagos Software Engineer, Sean Relampagos Software Developer, Sean Relampagos Freelance Web Developer, Sean Relampagos Freelance Web Designer, Sean Relampagos Freelance Fullstack Engineer, Sean Relampagos Freelance Fullstack Developer, Sean Relampagos Freelance Software Engineer, Sean Relampagos Freelance Software Developer, Sean Relampagos Frontend Engineer, Sean Relampagos Frontend Developer, Sean Relampagos Backend Engineer, Sean Relampagos Backend Developer, Sean Relampagos Kuala Lumpur, Sean Relampagos Malaysia, Sean Relampagos Philippines, Sean Relampagos Filipino, Sean Relampagos Filipino Web Developer, Sean Relampagos Filipino Web Designer, Sean Relampagos Filipino Fullstack Engineer, Sean Relampagos Filipino Fullstack Developer, Sean Relampagos Filipino Software Engineer, Sean Relampagos Filipino Software Developer, Sean Relampagos Filipino Frontend Engineer, Sean Relampagos Filipino Frontend Developer, Sean Relampagos Filipino Backend Engineer, Sean Relampagos Filipino Backend Developer"
                />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta name="author" content="Sean Relampagos" />
                <meta name="twitter:card" content="/seo/og.png" />
                <meta name="twitter:site" content="https://seangjr.me/" />
                <meta name="twitter:creator" content="Sean Relampagos" />
                <meta name="twitter:image" content="/seo/og.png" />
                <meta
                    property="og:site_name"
                    content="Sean Relampagos | Fullstack Engineer"
                />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/seo/og.png" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/favicon.png" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
