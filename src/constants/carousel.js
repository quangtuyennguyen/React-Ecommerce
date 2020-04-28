import React from 'react';

function SampleNextArrow({ onClick }) {
    return (
        <button onClick={onClick} className="control-arrow control-next"></button>
    );
};

function SamplePrevArrow({ onClick }) {
    return (
        <button onClick={onClick} className="control-arrow control-prev"></button>
    );
};

export const oneSidePerRowSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
};

export const twoSidePerRowSettings = {
    ...oneSidePerRowSettings,
    slidesToShow: 2,
    dots: false,
    centerPadding: '10rem',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
};

export const threeSidePerRowSettings = {
    ...twoSidePerRowSettings,
    slidesToShow: 3,
    responsive: [
        ...twoSidePerRowSettings.responsive,
    ]
};

export const responsiveSettings = {
    ...threeSidePerRowSettings,
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
            }
        },
        ...threeSidePerRowSettings.responsive
    ]
};
