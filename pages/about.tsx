import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
// Icons
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Head from "next/head";
import Image from "next/image";

// Image import
import profileImage from "../public/img/profile.jpg";
import Link from "next/link";
import Header from "../components/layout/_header";
import Footer from "../components/layout/_footer";
import Transition from "../components/transition";
const About = () => {
    const containerRef = useRef(null);
    return (
        <LocomotiveScrollProvider
            options={{
                smooth: true,
                lerp: 0.075,
            }}
            watch={[]}
            containerRef={containerRef}
        >
            <Head>
                <title>ABOUT | Sean Relampagos</title>
            </Head>
            <main
                className="l-lower-about"
                ref={containerRef}
                data-scroll-container
            >
                <Header />
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
                                            Fast learner.
                                        </span>
                                    </span>
                                    <span
                                        className="is-wrap"
                                        style={{
                                            transform: "translate(0px, 0px)",
                                        }}
                                    >
                                        <span className="is-slide-up u-delay03">
                                            Creative thinker.
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
                                            Hobbies
                                        </dt>
                                        <dd className="p-profile__dd">
                                            Creative design, music production,
                                            sports
                                        </dd>
                                    </div>
                                    <div className="p-profile__row">
                                        <dt className="p-profile__dt">
                                            Interests
                                        </dt>
                                        <dd className="p-profile__dd">
                                            Back-end Operations, Front-end
                                            UI/UX, Systems Development, Database
                                            Design and Management
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
                                            href="https://linkedin.com/in/sean-relampagos"
                                            className="p-sns__a"
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
                            className="c-section-heading"
                            style={{ transform: "translate(0px, 0px)" }}
                        >
                            <span className="c-section-heading__en">
                                SKILLS
                            </span>
                        </h2>
                        <div className="p-skills__contents js-trigger">
                            <ul className="p-skills__list">
                                <li className="p-skills__item  is-fade-up">
                                    <span className="p-skills__number">
                                        01 Engineering
                                    </span>
                                    <h3 className="p-skills__heading">
                                        Fullstack Development
                                    </h3>
                                    <p className="p-skills__text">
                                        From the front-end to the back-end, I
                                        specialise in building responsive, fast
                                        and secure websites and web
                                        applications. I possess a comprehensive
                                        understanding of frontend and backend
                                        development, allowing me to deliver
                                        end-to-end solutions for web
                                        applications. With my knowledge of
                                        Next.js, I create seamless user
                                        interfaces, while leveraging Express.js
                                        for robust server-side applications and
                                        RESTful APIs.
                                    </p>
                                </li>
                                <li className="p-skills__item  is-fade-up u-delay01">
                                    <span className="p-skills__number">
                                        02 Design
                                    </span>
                                    <h3 className="p-skills__heading">
                                        Web・UI Design
                                    </h3>
                                    <p className="p-skills__text">
                                        I have a strong understanding of design
                                        principles and a keen eye for detail. I
                                        am able to create beautiful, intuitive
                                        and functional user interfaces using
                                        Figma, Adobe XD and Photoshop. I am also
                                        able to create responsive and accessible
                                        websites using HTML, CSS and JavaScript.
                                    </p>
                                </li>
                                <li className="p-skills__item  is-fade-up u-delay02">
                                    <span className="p-skills__number">
                                        03 Language・Tools
                                    </span>
                                    <h3 className="p-skills__heading">Tools</h3>
                                    <p className="p-skills__text">
                                        <b>
                                            I am proficient in the following
                                            tools.
                                        </b>
                                        <br />
                                        <p
                                            style={{
                                                padding: "0.3rem 0",
                                            }}
                                        >
                                            HTML / CSS / JavaScript / Python /
                                            Java / Git / Docker / Adobe Suite
                                        </p>
                                        <br className="u-mt8" />
                                        <b>
                                            I am also familiar with the
                                            following frameworks and libraries.
                                        </b>
                                        <br />
                                        <p
                                            style={{
                                                padding: "0.3rem 0",
                                            }}
                                        >
                                            React / Next.js / Express.js /
                                            TypeScript / Node.js / MongoDB /
                                            MySQL / Firebase / Tailwind CSS /
                                            Scss / Vercel / Docker
                                        </p>
                                    </p>
                                </li>
                                <li className="p-skills__item  is-fade-up u-delay03">
                                    <span className="p-skills__number">
                                        04 Others
                                    </span>
                                    <h3 className="p-skills__heading">
                                        Soft Skills
                                    </h3>
                                    <p className="p-skills__text">
                                        I am a highly motivated and adaptable
                                        individual with a strong work ethic and
                                        a passion for continuous learning. With
                                        excellent communication skills and the
                                        ability to work both independently and
                                        collaboratively, I thrive in diverse
                                        environments. I possess a talent for
                                        quickly acquiring new skills and
                                        technologies, allowing me to stay ahead
                                        of industry trends. Working well under
                                        pressure and managing multiple projects
                                        simultaneously are among my core
                                        strengths. Trust me to deliver
                                        exceptional results and make a valuable
                                        contribution to any dynamic work
                                        environment.
                                    </p>
                                </li>
                            </ul>
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
                                    <p className="p-career__company">
                                        Interseed ・ Internship
                                    </p>
                                    <dt className="p-career__dt">
                                        Frontend Developer Intern
                                    </dt>
                                    <dd
                                        className="p-career__dd"
                                        style={{
                                            marginBottom: "1rem",
                                        }}
                                    >
                                        ・ Led front-end development efforts for
                                        the company&apos;s landing page, taking
                                        charge of its design and implementation.
                                        <br />
                                        ・ Utilized Wordpress and Elementor to
                                        create a custom theme, ensuring a
                                        cohesive and on-brand UI/UX experience.
                                        <br />
                                    </dd>
                                    <p className="p-career__company">
                                        Freelance
                                    </p>
                                    <dt className="p-career__dt">
                                        Python Developer
                                    </dt>
                                    <dd className="p-career__dd">
                                        ・ Proficient in leveraging
                                        Python&apos;s powerful libraries and
                                        frameworks for data manipulation,
                                        analysis, and visualization.
                                        <br /> ・ Skilled in creating insightful
                                        reports and visualizations to extract
                                        actionable insights from complex
                                        datasets.
                                        <br /> ・ Dedicated to delivering
                                        high-quality and efficient solutions
                                        that meet clients&apos; specific data
                                        analytics needs. Communicated and
                                        briefed clients on the progress of the
                                        project.
                                    </dd>
                                </div>
                                <div className="p-career__row">
                                    <dt className="p-career__date">2022</dt>
                                    <p className="p-career__company">
                                        Freelance
                                    </p>
                                    <dt className="p-career__dt">
                                        Fullstack Engineer
                                    </dt>
                                    <dd className="p-career__dd">
                                        ・ Proficiently developed both front-end
                                        and back-end components for web
                                        applications and offline desktop
                                        applications.
                                        <br />・ Expertise in utilizing a
                                        diverse range of technologies, including
                                        the reliable LAMP stack and cutting-edge
                                        Jamstack technologies.
                                        <br />
                                        ・ Skillfully created and designed CRUD
                                        applications, ensuring seamless data
                                        management and user interactions.
                                        <br />・ Successfully implemented
                                        RESTful API endpoints, enabling
                                        efficient communication between the
                                        front-end and back-end systems.
                                        <br />・ Experienced in working with
                                        server frameworks like Express.js and
                                        leveraging databases for robust and
                                        scalable solutions.
                                    </dd>
                                </div>
                                <div className="p-career__row">
                                    <dt className="p-career__date">Present</dt>
                                    <p className="p-career__company">
                                        Base Two ・ Internship
                                    </p>
                                    <dt className="p-career__dt">
                                        Web Developer Intern
                                    </dt>
                                    <dd
                                        className="p-career__dd"
                                        style={{
                                            marginBottom: "1rem",
                                        }}
                                    >
                                        ・ Handled front-end development for a
                                        client&apos;s e-commerce website,
                                        ensuring a seamless and responsive user
                                        experience.
                                        <br />・ Utilized <b>Next.js</b>, and
                                        <b>Tailwind CSS</b> to create a custom
                                        theme, ensuring a cohesive and on-brand
                                        UI/UX experience.
                                        <br /> ・ Worked closely with the design
                                        team to ensure that the website&apos;s
                                        design and functionality are aligned
                                        with the client&apos;s vision.
                                        <br />・ Collaborated with the back-end
                                        team to implement RESTful API endpoints,
                                        enabling efficient communication between
                                        the front-end and back-end systems.
                                        Implemented <b>Redux</b> to ensure data
                                        synchronization between the front-end
                                        and back-end.
                                        <br /> ・ Implemented secure
                                        authentication and authorization using{" "}
                                        <b>JWT</b> and <b>OAuth</b>.
                                    </dd>
                                    <p className="p-career__company">
                                        Base Two ・ Part-time ・ Freelance
                                    </p>
                                    <dt className="p-career__dt">
                                        Frontend Engineer
                                    </dt>
                                    <dd className="p-career__dd">
                                        ・ Led front-end development efforts for
                                        the company&apos;s past and current projects, taking
                                        charge of its design and implementation.
                                        <br />
                                        ・ Optimized past projects by refactoring the codebase and
                                        implementing new features.
                                        <br />
                                        ・ Maintained and improved projects by fixing bugs and communicating with
                                        clients to ensure that the project is aligned with their vision.
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
                <Link
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
                </Link>
                <Footer />
            </main>
        </LocomotiveScrollProvider>
    );
};

export default Transition(About);
