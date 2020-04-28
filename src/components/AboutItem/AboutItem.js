import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export const AboutItem = ({
    id, title, subTitle,
    textLarge, body,
    feature, image
}) => {

    const renderImageZoom = () => {
        if (window.innerWidth >= 1024) {
            return (
                <Zoom>
                    <img
                        className="content__img u-margin-center"
                        alt={title}
                        src={image}
                    />
                </Zoom>
            )
        } else {
            return (
                <img className="content__img u-margin-center" src={image} alt={title} />
            )
        };
    };

    return (
        <section id={id}>
            <div className="row content">
                <div className="col span_1_of_2">
                    <div className="content__box-image">
                        {renderImageZoom()}
                    </div>
                </div>
                <div className="col span_1_of_2">
                    <div className="content__details">
                        <div className="content__text">
                            <div className="heading-title">
                                <span className="heading-title--sub">{subTitle}</span>
                                <h4 className="heading-title--main" style={{ maxWidth: "60rem" }}>{title}</h4>
                            </div>
                            <p className="content__desc">{body}</p>
                        </div>
                        {feature}
                        <span className="content__watermark">{textLarge}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};