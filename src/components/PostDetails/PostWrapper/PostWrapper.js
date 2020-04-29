import PropTypes from 'prop-types';
import React from 'react';

import { PostDetails } from '../../../components/PostDetails/PostDetails';
import { PostSideBar } from '../../Sidebars/PostSideBar/PostSideBar';

PostWrapper.propTypes = {
  postCurrent: PropTypes.object,
  otherPosts: PropTypes.array,
  postNears: PropTypes.object,
};

PostWrapper.defaultProps = {
  postCurrent: {},
  otherPosts: [],
  postNears: {},
};

export const PostWrapper = ({ postCurrent, otherPosts, postNears }) => (
  <section id="section-post-details">
    <div className="row">
      <PostDetails postCurrent={postCurrent} postNears={postNears} />
      <PostSideBar otherPosts={otherPosts} />
    </div>
  </section>
);
