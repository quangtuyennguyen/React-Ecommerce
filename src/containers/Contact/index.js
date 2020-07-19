import React, { Fragment } from 'react';

import Contact from '../../components/Contact';
import BreadCrumb from '../../components/BreadCrumb';

export default function ContactContainer() {
  return (
    <Fragment>
      <BreadCrumb />
      <Contact />
    </Fragment>
  );
}
