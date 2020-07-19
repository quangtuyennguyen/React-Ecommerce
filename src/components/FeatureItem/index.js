import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';

import { FEATURES } from '../../constants';

export default function FeatureItem() {
  const renderFeatures = () =>
    _.map(FEATURES, ({ id, title, image }) => (
      <div key={id} className="col span_1_of_3">
        <div className="feature">
          <Link to="/shop" className="feature__link">
            <img src={image} alt={title} className="feature__img" />
          </Link>
        </div>
      </div>
    ));
  return renderFeatures();
}
