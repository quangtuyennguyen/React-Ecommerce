import _ from 'lodash';
import React from 'react';
import { BRANDS } from '../../constants';

export default function Brand() {
  const renderBrands = () =>
    _.map(BRANDS, ({ title, image }) => (
      <div key={title} className="col span_1_of_6">
        <img src={image} alt={title} />
      </div>
    ));

  return (
    <section id="section-brands">
      <div className="row u-padding-top-medium u-padding-bottom-medium">
        {renderBrands()}
      </div>
    </section>
  );
}
