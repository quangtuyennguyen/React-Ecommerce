import PropTypes from 'prop-types';
import React from 'react';

import PostSideBar from '../../Sidebars/PostSideBar';
import PostDetails from '..';

PostWrapper.propTypes = {
  postCurrent: PropTypes.object,
  otherPosts: PropTypes.array,
  postNears: PropTypes.array,
};

PostWrapper.defaultProps = {
  postCurrent: {},
  otherPosts: [],
  postNears: [],
};

export default function PostWrapper({ postCurrent, otherPosts, postNears }) {
  return (
    <section id="section-post-details">
      <div className="row">
        <PostDetails postCurrent={postCurrent} postNears={postNears} />
        <PostSideBar otherPosts={otherPosts} />
      </div>
    </section>
  );
}
