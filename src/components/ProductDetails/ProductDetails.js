import React, { Fragment } from 'react';

import TabContent from './TabContent/TabContent';
import { Heading } from './Heading/Heading';

export const ProductDetails = ({ children, category }) => (
    <Fragment>
        <Heading category={category} />
        <section id="section-product-details">
            {children}
        </section>
        <TabContent />
    </Fragment>
);