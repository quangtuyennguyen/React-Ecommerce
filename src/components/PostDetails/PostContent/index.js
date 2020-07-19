import classnames from 'classnames';
import PropTypes from 'prop-types';
import _ from 'lodash';
import React from 'react';

PostContent.propTypes = {
  body: PropTypes.array,
};

PostContent.defaultProps = {
  body: [],
};

export default function PostContent({ body }) {
  const renderContent = () =>
    _.map(body, (desc, index) => (
      <p
        key={desc}
        className={classnames('post__desc post__desc--big', {
          'post__desc--big-active': index === 3,
        })}
      >
        {index === 3 && <span className="post__qoute">"</span>}
        {desc}
      </p>
    ));

  return <div className="row u-margin-none">{renderContent()}</div>;
}
