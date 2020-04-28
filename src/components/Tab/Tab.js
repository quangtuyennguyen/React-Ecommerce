import classnames from 'classnames';
import _ from 'lodash';
import React from 'react';

export const Tab = ({
    tabs, heading,
    padding, tabIndex,
    changeTab
}) => {
    const renderTabs = () => (
        _.map(tabs, (tab, index) => (
            <li key={tab} className="tab__item">
                <span
                    onClick={() => changeTab(tab, index)}
                    className={classnames(
                    "tab__link",
                    { "tab__link--active": tabIndex === index }
                    )}>{`${tab + (tab.includes('%') ? ' Off' : '')}`}</span>
            </li>
        ))
    );

    return (
        <div className={`${padding ? 'row' : 'row-fluid'} u-underline ${padding && 'u-margin-top-medium'}`}>
            {heading ? <div className="col span_1_of_2">
                <h2 className="heading-secondary">
                    {heading}
                </h2>
            </div> : null}
            <div className={`col span_1_of_${heading ? 2 : 1}`}>
                <ul className={heading ? 'tabs__list' : 'tabs__list u-left-text'}>
                    {renderTabs(tabs)}
                </ul>
            </div>
        </div>
    );
};