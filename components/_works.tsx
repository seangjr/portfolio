import Link from "next/link";
import Image from "next/image";
export const WorkDetails = ({ work }: any) => {
    return (
        <li
            data-id={work.dataId}
            key={work.classId}
            className="p-works__content p-works-content"
        >
            <div className="p-works-content__number">
                <span className="is-slide-mask"></span>
            </div>
            <div className="p-works-content__body">
                <h3 className="p-works-content__title is-slide-mask">
                    {work.title}
                </h3>
                <br />
                <p className="p-works-content__category is-slide-mask">
                    {work.category}
                </p>
                <br />
                <p className="p-works-content__text is-slide-mask">
                    {work.description}
                </p>
                <div className="p-works-content__link-wrapper is-slide-mask">
                    <Link
                        href={`/${work.slug}`}
                        className="c-button-primary c-button-primary--large"
                    >
                        <span className="c-button-primary__text">
                            <span
                                className="c-button-primary__text-inner"
                                data-text={work.title}
                            >
                                View more
                            </span>
                        </span>
                        <span className="c-button-primary__line"></span>
                    </Link>
                </div>
            </div>
            <div className="p-works-content__scope-wrapper">
                <p className="p-works-content__scope is-slide-mask">
                    {work.scope}
                </p>
            </div>
        </li>
    );
};

export const WorkImage = ({ work }: any) => {
    return (
        <Link
            id={work.classId}
            href={`/${work.slug}`}
            className="p-works__item p-works-item js-follow-targets"
            key={work.dataId}
        >
            <picture className="p-works-item__picture">
                <img
                    src={work.thumbnail.url}
                    alt={work.title}
                    loading="lazy"
                    data-scroll
                    data-scroll-speed="-1.1"
                />
            </picture>
            <div className="p-works-item__body u-hidden-lax-up">
                <h3 className="p-works-item__title">{work.title}</h3>
                <p className="p-works-item__category">{work.category}</p>
            </div>
        </Link>
    );
};
