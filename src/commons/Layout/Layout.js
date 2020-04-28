import React from 'react';

export const LayOut = ({ children, name }) => {
    return (
        <div className={name}>
            {children}
            <button className="btn-scroll-top u-center-text u-suggest" id="scrollToTop">&#8593;</button>
        </div>
    );
};
