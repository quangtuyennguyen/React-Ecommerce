import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import PostItem from './PostItem';
import PostList from './PostList';

PostRelated.propTypes = {
  otherPosts: PropTypes.array,
};

PostRelated.defaultProps = {
  otherPosts: [],
};

export default function PostRelated({ otherPosts }) {
  const renderPostItem = () =>
    _.map(otherPosts, ({ id, title, body, images, date, username }) => (
      <PostItem
        key={id}
        id={id}
        title={_.capitalize(title)}
        body={body[0]}
        image={images[0]}
        date={date}
        username={username}
      />
    ));

  return <PostList>{renderPostItem()}</PostList>;
}
