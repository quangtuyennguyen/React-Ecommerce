import _ from 'lodash';
import React, { Fragment, useEffect } from 'react';

import AboutItem from '../../components/AboutItem';
import AboutList from '../../components/AboutList';
import AboutForm from '../../components/AboutForm';
import { ABOUT_LIST } from '../../constants';
import Member from '../../components/Members';
import BreadCrumb from '../../components/BreadCrumb';

export default function About() {
  useEffect(() => {
    document.title = 'About us - Shopping';
  }, []);

  const renderAboutItem = () =>
    _.map(
      ABOUT_LIST,
      ({ id, title, subTitle, textLarge, body, feature, image }) => (
        <AboutItem
          key={id}
          id={id}
          title={title}
          subTitle={subTitle}
          textLarge={textLarge}
          body={body}
          feature={feature}
          image={image}
        />
      ),
    );
  return (
    <Fragment>
      <BreadCrumb />
      <AboutList>{renderAboutItem()}</AboutList>
      <Member />
      <AboutForm />
    </Fragment>
  );
}
