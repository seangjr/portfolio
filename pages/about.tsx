// Icons
import { AiFillInstagram } from "react-icons/ai";
import {
    FaTwitter,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
    FaPython,
    FaJava,
    FaDatabase,
    FaGitAlt,
    FaExternalLinkAlt,
} from "react-icons/fa";
import { SiJavascript, SiAdobephotoshop } from "react-icons/si";
import Head from "next/head";
import Image from "next/image";

// Image import
import profileImage from "../public/img/profile.jpg";
const About = () => {
    return (
        <>
            <Head>
                <title>ABOUT | Sean Relampagos</title>
            </Head>
            <main
                className="l-lower-about"
                data-barba="container"
                data-barba-namespace="about"
            >
                <div className="l-container">
                    <section id="js-first-view" className="p-lower-first-view">
                        <div className="p-lower-first-view__inner">
                            <div className="p-lower-first-view__heading c-page-heading">
                                <h1
                                    className="c-page-heading__en is-wrap"
                                    style={{
                                        transform: "translate(0px, 0px)",
                                    }}
                                >
                                    <span className="is-slide-up">
                                        ABOUT{" "}
                                        <span className="u-hidden-lax-up">
                                            ME
                                        </span>
                                    </span>
                                </h1>
                                <span
                                    className="c-page-heading__en is-wrap u-hidden-lax-down"
                                    style={{
                                        transform: "translate(0px, 0px)",
                                    }}
                                >
                                    <span className="is-slide-up u-delay01">
                                        ME
                                    </span>
                                </span>
                            </div>
                            <div className="p-lower-first-view__intro p-intro">
                                <p className="p-intro__heading">
                                    <span
                                        className="is-wrap"
                                        style={{
                                            transform: "translate(0px, 0px)",
                                        }}
                                    >
                                        <span className="is-slide-up u-delay02">
                                            A multidisciplinary
                                        </span>
                                    </span>
                                    <span
                                        className="is-wrap"
                                        style={{
                                            transform: "translate(0px, 0px)",
                                        }}
                                    >
                                        <span className="is-slide-up u-delay03">
                                            software engineer.
                                        </span>
                                    </span>
                                </p>
                                <p className="p-intro__text js-slide-up-row">
                                    Being an enthusiast of all things
                                    technology, Sean (b. 2004) has explored
                                    different areas of development as a
                                    detail-oriented student. Any one definition
                                    is inadequate as he is a creative thinker,
                                    producer and designer seeking out for new
                                    and innovative ways to design software and
                                    products. He hopes to leverage the goals and
                                    ambitions of his clients and organizations
                                    through his expertise in design,
                                    development, coding and quality testing.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="p-profile l-lower-about__profile">
                        <h2
                            className="c-section-heading js-trigger"
                            style={{ transform: "translate(0px, 0px)" }}
                        >
                            <span className="c-section-heading__en is-wrap">
                                <span className="is-slide-up">PROFILE</span>
                            </span>
                        </h2>
                        <div className="p-profile__contents js-trigger">
                            <div
                                className="p-profile__column"
                                data-scroll
                                data-scroll-speed="-1"
                            >
                                <h3 className="p-profile__heading">
                                    <span className="p-profile__heading-en">
                                        Sean Relampagos
                                    </span>
                                </h3>
                                <dl className="p-profile__dl">
                                    <div className="p-profile__row">
                                        <dt className="p-profile__dt">
                                            Birthday
                                        </dt>
                                        <dd className="p-profile__dd">
                                            2004, March 8
                                        </dd>
                                    </div>
                                    <div className="p-profile__row">
                                        <dt className="p-profile__dt">
                                            Birthplace
                                        </dt>
                                        <dd className="p-profile__dd">
                                            Luzon, Philippines
                                        </dd>
                                    </div>
                                    <div className="p-profile__row">
                                        <dt className="p-profile__dt">
                                            Hobbies
                                        </dt>
                                        <dd className="p-profile__dd">
                                            Musical instruments, video games,
                                            sports
                                        </dd>
                                    </div>
                                    <div className="p-profile__row">
                                        <dt className="p-profile__dt">
                                            Interests
                                        </dt>
                                        <dd className="p-profile__dd">
                                            Backend Development, Jamstack,
                                            Python, Java
                                        </dd>
                                    </div>
                                </dl>
                                <ul className="p-profile__sns p-sns">
                                    <li className="p-sns__item">
                                        <a
                                            href="https://twitter.com/spaysheeps"
                                            className="p-sns__a"
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
                                        </a>
                                    </li>
                                    <li className="p-sns__item">
                                        <a
                                            href="https://instagram.com/seangjr_"
                                            className="p-sns__a"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span className="u-visually-hidden">
                                                Instagram
                                            </span>
                                            <AiFillInstagram
                                                size={20}
                                                className="c-svg p-sns__svg"
                                            />
                                        </a>
                                    </li>
                                    <li className="p-sns__item">
                                        <a
                                            href="https://github.com/seangjr"
                                            className="p-sns__a"
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
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-profile__img-wrapper">
                                <picture className="p-profile__picture">
                                    <Image
                                        src={profileImage}
                                        className="p-profile__img"
                                        width="545"
                                        height="700"
                                        loading="lazy"
                                        alt=""
                                        data-scroll
                                        data-scroll-speed="-1"
                                    />
                                </picture>
                            </div>
                        </div>
                    </section>

                    <section className="p-skills l-lower-about__skills">
                        <h2
                            className="c-section-heading js-trigger"
                            style={{ transform: "translate(0px, 0px)" }}
                        >
                            <span className="c-section-heading__en is-wrap">
                                <span className="is-slide-up">SKILLS</span>
                            </span>
                        </h2>
                        <div className="p-skills__contents js-trigger">
                            <dl className="p-skills__dl is-fade-up">
                                <div className="p-skills__row">
                                    <dt className="p-skills__dt">
                                        <FaHtml5
                                            size={40}
                                            className="c-svg p-skills__svg"
                                            fill="#e34f26"
                                        />
                                        HTML
                                    </dt>
                                    <dd className="p-skills__dd">
                                        Semantic tags and accessibility. HTML5
                                        boilerplates and templates.
                                    </dd>
                                </div>
                                <div className="p-skills__row">
                                    <dt className="p-skills__dt">
                                        <FaCss3Alt
                                            size={40}
                                            className="c-svg p-skills__svg"
                                            fill="#264de4"
                                        />
                                        CSS
                                    </dt>
                                    <dd className="p-skills__dd">
                                        CSS Grid & Flexbox. CSS frameworks such
                                        as Bootstrap and TailwindCSS and CSS
                                        preprocessors such as Sass and Less.
                                        CSS-in-JS libraries such as Styled
                                        Components and Emotion.
                                    </dd>
                                </div>
                                <div className="p-skills__row">
                                    <dt className="p-skills__dt">
                                        <SiJavascript
                                            size={40}
                                            className="c-svg p-skills__svg"
                                            fill="#f7df1e"
                                        />
                                        JavaScript
                                    </dt>
                                    <dd className="p-skills__dd">
                                        ES6/TypeScript syntax and features.
                                        Libraries and frameworks such as React,
                                        and jQuery. Backend development with
                                        Node.js and Express.js.
                                    </dd>
                                </div>
                                <div className="p-skills__row">
                                    <dt className="p-skills__dt">
                                        <FaPython
                                            size={40}
                                            className="c-svg p-skills__svg"
                                        />
                                        Python
                                    </dt>
                                    <dd className="p-skills__dd">
                                        Creating and testing scalable Python
                                        scripts. Data analysis libraries such as
                                        NumPy, Pandas, and Matplotlib.
                                    </dd>
                                </div>
                                <div className="p-skills__row">
                                    <dt className="p-skills__dt">
                                        <FaJava
                                            size={40}
                                            className="c-svg p-skills__svg"
                                        />
                                        Java
                                    </dt>
                                    <dd className="p-skills__dd">
                                        Object oriented programming with Java.
                                        Studying Spring Boot and Spring
                                        Security.
                                    </dd>
                                </div>
                                <div className="p-skills__row">
                                    <dt className="p-skills__dt">
                                        <FaDatabase
                                            size={40}
                                            className="c-svg p-skills__svg"
                                        />
                                        SQL / NoSQL
                                    </dt>
                                    <dd className="p-skills__dd">
                                        Relational database management systems
                                        and NoSQL databases such as MongoDB.
                                        This website is built with MongoDB.
                                    </dd>
                                </div>
                                <div className="p-skills__row">
                                    <dt className="p-skills__dt">
                                        <FaGitAlt
                                            size={40}
                                            className="p-skills__svg c-svg"
                                            fill="#F1502F"
                                        />
                                        Git / GitHub
                                    </dt>
                                    <dd className="p-skills__dd">
                                        Version control and collaboration using
                                        Git.
                                    </dd>
                                </div>
                                <div className="p-skills__row">
                                    <dt className="p-skills__dt">
                                        <SiAdobephotoshop
                                            size={40}
                                            className="c-svg p-skills__svg"
                                        />
                                        Design Tools
                                    </dt>
                                    <dd className="p-skills__dd">
                                        Photoshop, Illustrator, Figma, and Adobe
                                        XD
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </section>

                    <section className="p-career l-lower-about__career">
                        <h2
                            className="c-section-heading js-trigger"
                            style={{ transform: "translate(0px, 0px)" }}
                        >
                            <span className="c-section-heading__en is-wrap">
                                <span className="is-slide-up">CAREER</span>
                            </span>
                        </h2>
                        <div className="p-career__contents js-trigger">
                            <dl className="p-career__dl">
                                <div className="p-career__row">
                                    <dt className="p-career__date">2021</dt>
                                    <dt className="p-career__dt">Interseed</dt>
                                    <dd className="p-career__dd">
                                        ・ In charge of the front-end
                                        development of the company&apos;s
                                        landing page.
                                        <br />
                                        ・ Worked with Wordpress and Elementor,
                                        and created a custom theme to ensure
                                        that the UI / UX is consistent with the
                                        company&apos;s branding.
                                        <br />
                                        ・ Managed and communicated requirements
                                        with a team.
                                        <br />
                                    </dd>
                                    <dt className="p-career__dt">
                                        Freelance Python developer
                                    </dt>
                                    <dd className="p-career__dd">
                                        ・ Accepted projects from clients and
                                        worked on them independently.
                                        <br /> ・ Created programs to analyse
                                        and visualise data from a CSV file using
                                        NumPy, Pandas and Matplotlib.
                                        <br /> ・ Communicated and briefed
                                        clients on the progress of the project.
                                    </dd>
                                </div>
                                <div className="p-career__row">
                                    <dt className="p-career__date">2022</dt>
                                    <dt className="p-career__dt">
                                        Freelance Full-stack Engineer
                                    </dt>
                                    <dd className="p-career__dd">
                                        ・ Developed front-end and back-end of
                                        web applications and offline desktop
                                        applications.
                                        <br />・ Worked with LAMP stack and
                                        Jamstack technologies.
                                        <br />
                                        ・ Created and designed CRUD
                                        applications and RESTful API endpoints.
                                        <br />
                                        ・Accepted various back-end projects
                                        from clients and worked with server
                                        frameworks like Express.js and
                                        databases.
                                    </dd>
                                </div>
                                <div className="p-career__row">
                                    <dt className="p-career__date">Present</dt>
                                    <dt className="p-career__dt">
                                        Projects completed
                                    </dt>
                                    <dd className="p-career__dd">
                                        ・{" "}
                                        <span className="u-under-line u-weight600">
                                            NFT Minting Application
                                        </span>
                                        . A Web3 application that allows users
                                        to purchase NFTs minted on the Ethereum
                                        blockchain. The application is built
                                        with React.js framework Next.js,
                                        @thirdweb libraries, and Sanity CMS. The
                                        application is deployed on Vercel, and
                                        it is using testnet Ethereum
                                        blockchain.&nbsp;
                                        <a
                                            href="https://github.com/seangjr/nft-drop-website"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <span className="u-under-line">
                                                Repository{" "}
                                                <FaExternalLinkAlt
                                                    className="c-svg"
                                                    height={5}
                                                    width={5}
                                                />
                                            </span>
                                        </a>
                                        <br />・{" "}
                                        <span className="u-under-line u-weight600">
                                            Whatsapp Web Clone
                                        </span>
                                        . A web application that allows users to
                                        chat in real time with other users. The
                                        application is built with React.js
                                        framework Next.js, Firebase Cloud
                                        Firestore, and Tailwind CSS. The
                                        application is deployed on Vercel.
                                        <br />・{" "}
                                        <span className="u-under-line u-weight600">
                                            Restaurant Ordering System
                                        </span>
                                        . An object oriented approach to a
                                        simple restaurant ordering system using
                                        Node.js and JavaScript. It allows users
                                        to order food and drinks, and the system
                                        will calculate the total price of the
                                        order and let them checkout.&nbsp;
                                        <a
                                            href="https://github.com/seangjr/node-restaurant-app"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <span className="u-under-line">
                                                Repository{" "}
                                                <FaExternalLinkAlt
                                                    className="c-svg"
                                                    height={5}
                                                    width={5}
                                                />
                                            </span>
                                        </a>
                                        <br />・{" "}
                                        <span className="u-under-line u-weight600">
                                            Online Spotify Player
                                        </span>
                                        . A web application that allows users to
                                        search for songs and play them on
                                        Spotify. However, they must have a
                                        Spotify account to use the application
                                        and an active daemon running on their
                                        computer. The application is built with
                                        React.js framework Next.js, Spotify Web
                                        API, and Tailwind CSS. The application
                                        is deployed on Vercel.&nbsp;
                                        <a
                                            href="https://github.com/seangjr/spewtify"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <span className="u-under-line">
                                                Repository{" "}
                                                <FaExternalLinkAlt
                                                    className="c-svg"
                                                    height={5}
                                                    width={5}
                                                />
                                            </span>
                                        </a>
                                    </dd>
                                </div>
                                <div className="p-career__row">
                                    <dt className="p-career__date">20XX</dt>
                                    <dt className="p-career__dt">
                                        What kind of engineer do I want to be?
                                    </dt>
                                    <dd className="p-career__dd">
                                        <span className="p-career__dd-heading">
                                            1.&nbsp;
                                            <br className="u-hidden-md-up" />
                                            An engineer committed to learning
                                            and skill improvement.
                                        </span>
                                        <br />
                                        To be an engineer who is always open to
                                        learning new things and improving their
                                        skills, someone who is always looking
                                        for ways to improve their skills and
                                        knowledge.
                                        <br />
                                        I want to continue this way of thinking
                                        and initiative throughout my career,
                                        learning as much as possible during work
                                        and outside of work to improve my skills
                                        and strive to be able to handle tasks on
                                        my own.
                                        <hr />
                                        <span className="p-career__dd-heading">
                                            2.&nbsp;
                                            <br className="u-hidden-md-up" />
                                            An engineer who can work well with
                                            others.
                                        </span>
                                        <br />
                                        <br />
                                        Communication is key to working well
                                        with a team. I want&nbsp;
                                        <span className="u-under-line u-weight600">
                                            to be an engineer who can
                                            communicate well with others, and
                                            who can work well with others to
                                            achieve a common goal.
                                        </span>
                                        <br />
                                        I make sure to voice out my opinions and
                                        ask a lot of questions to make sure that
                                        I understand the requirements and the
                                        direction of the project.
                                        <br />
                                        <hr />
                                        <span className="p-career__dd-heading">
                                            3.&nbsp;
                                            <br className="u-hidden-md-up" />
                                            An engineer with an understanding of
                                            design.
                                        </span>
                                        <br />
                                        I want to be an engineer who can not
                                        only implement as requested, but also
                                        has an understanding of design and can
                                        propose and implement optimal
                                        interactions and animations.
                                        <br />
                                        To do this, I am currently catching up
                                        on design trends&nbsp;
                                        <span className="u-under-line u-weight600">
                                            by following domestic gallery sites
                                            and international awards.
                                        </span>
                                        <hr />
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </section>
                </div>
                <a
                    href="/contact/"
                    className="p-contact-connect"
                    style={{ transform: "translate(0px, 0px)", zIndex: 20 }}
                >
                    <p className="p-contact-connect__text-wrapper">
                        <span
                            className="p-contact-connect__text"
                            data-text="Contact"
                        >
                            Contact
                        </span>
                    </p>
                </a>
            </main>
        </>
    );
};

export default About;
