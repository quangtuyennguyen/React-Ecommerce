import React, { Fragment } from 'react';

import { Contact } from '../../components/Contact/Contact';
import { BreadCrumb } from '../../components/BreadCrumb/BreadCrumb';

export const ContactContainer = () => (
    <Fragment>
        <BreadCrumb />
        <Contact />
    </Fragment>
);