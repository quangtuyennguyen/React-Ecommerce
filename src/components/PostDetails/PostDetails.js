import PropTypes from 'prop-types';
import React from 'react';
import { PostAction } from './PostAction/PostAction';
import { PostContent } from './PostContent/PostContent';
import { PostGallery } from './PostGallery/PostGallery';
import { PostTags } from './PostTags/PostTags';

PostDetails.propTypes = {
  postCurrent: PropTypes.object,
  postNears: PropTypes.object,
};

PostDetails.defaultProps = {
  postCurrent: {},
  postNears: {},
};

export const PostDetails = ({ postCurrent, postNears }) => {
  const { images, body } = postCurrent;
  return (
    <div className="col span_2_of_3 u-md-width-full">
      <div className="post-content">
        <PostGallery images={images} />
        <PostContent body={body} />
        <PostTags />
        <PostAction postNears={postNears} />
      </div>
    </div>
  );
};
