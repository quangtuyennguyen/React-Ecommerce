import React, { Fragment } from 'react';

import { Tab } from '../../../Tab/Tab';
import { TABS_CATEGORY } from '../../../../constants/index';

export const ProductList = ({ children, 
    changeTab, tab, tabIndex
}) => {
    const productPerRow = 4;
    const rows = children.length / productPerRow;

    const renderRows = () => {
        const result = [];
        for (let i = 0; i < rows; i++) {
            result.push(<div key={i} className="row">{children.slice(productPerRow * i, (productPerRow * i) + productPerRow)}</div>);
        };
        return result;
    };

    return (
        <Fragment>
            <section id="section-categories" className="u-padding-bottom-regular">
                <Tab
                    tab={tab}
                    changeTab={changeTab}
                    padding
                    heading="Top Categories This Week"
                    tabs={TABS_CATEGORY}
                    tabIndex={tabIndex}
                />
                { renderRows()}
            </section>
        </Fragment>
    );
};