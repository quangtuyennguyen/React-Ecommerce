import _ from 'lodash';
import React, { Fragment, useEffect } from 'react';

import { AboutItem } from '../../components/AboutItem/AboutItem';
import { AboutList } from '../../components/AboutList/AboutList';
import { AboutForm } from '../../components/AboutForm/AboutForm';
import { ABOUT_LIST } from '../../constants/index';
import { Member } from '../../components/Members/Members';
import { BreadCrumb } from '../../components/BreadCrumb/BreadCrumb';

export const About = () => {
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
};
