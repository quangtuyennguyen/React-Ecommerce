import _ from 'lodash';
import React from 'react';

const brands = [
  {
    title: 'Brand photo 1',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584334485/sponsors_white_1_qcj0zs.png',
  },
  {
    title: 'Brand photo 2',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584334485/sponsors_white_2_sggp3p.png',
  },
  {
    title: 'Brand photo 3',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584334485/sponsors_white_3_tmoqqr.png',
  },
  {
    title: 'Brand photo 4',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584334485/sponsors_white_1_qcj0zs.png',
  },
  {
    title: 'Brand photo 5',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584334485/sponsors_white_5_ozkoxd.png',
  },
  {
    title: 'Brand photo 6',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584334485/sponsors_white_6_rwshpw.png',
  },
];

export const Brand = () => {
  const renderBrands = () =>
    _.map(brands, ({ title, image }) => (
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
};
