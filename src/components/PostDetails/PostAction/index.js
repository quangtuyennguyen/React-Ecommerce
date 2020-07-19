import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import slug from 'slug';

PostAction.propTypes = {
  postNears: PropTypes.array,
};

PostAction.defaultProps = {
  postNears: [],
};

export default function PostAction({ postNears }) {
  const { pathname } = useLocation();
  const [postReview, setPostReview] = useState('');
  const [prevPost, nextPost] = postNears;
  return (
    <div className="row row--control u-margin-top-medium u-margin-horizontal-none">
      <div className="col span_1_of_3">
        {postReview === 'prev' && prevPost && (
          <div className="post__preview-box post__preview-box--prev">
            <div className="post_preview-image-box">
              <img
                className="post__preview-image"
                src={prevPost.useravatar}
                alt=""
              />
            </div>
            <div className="post__preview-text">
              <h6 className="post__preview-title">
                {_.capitalize(prevPost.title)}
              </h6>
              <span className="post__preview-desc">{prevPost.authorName}</span>
            </div>
          </div>
        )}
        <Link
          to={
            prevPost
              ? `/blog/${slug(prevPost.title.toLowerCase())}.${prevPost.id}`
              : pathname
          }
        >
          <div
            onMouseMove={() => setPostReview('prev')}
            onMouseLeave={() => setPostReview('')}
            className="post__action"
          >
            <span className="post-control post-control---prev">‹</span>
            <p className="post__action-text">Prev post</p>
          </div>
        </Link>
      </div>
      <div className="col span_1_of_3">
        <Link to="/blog">
          <div className="post__action">
            <span className="fas fa-list-ul" />
            <p className="post__action-text">All posts</p>
          </div>
        </Link>
      </div>
      <div className="col span_1_of_3">
        {postReview === 'next' && nextPost && (
          <div className="post__preview-box post__preview-box--prev">
            <div className="post_preview-image-box">
              <img
                className="post__preview-image"
                src={nextPost.useravatar}
                alt=""
              />
            </div>
            <div className="post__preview-text">
              <h6 className="post__preview-title">
                {_.capitalize(nextPost.title)}
              </h6>
              <span className="post__preview-desc">{nextPost.authorName}</span>
            </div>
          </div>
        )}
        <Link
          to={
            nextPost
              ? `/blog/${slug(nextPost.title.toLowerCase())}.${nextPost.id}`
              : pathname
          }
        >
          <div
            onMouseMove={() => setPostReview('next')}
            onMouseLeave={() => setPostReview('')}
            className="post__action"
          >
            <p className="post__action-text">Next post</p>
            <span className="post-control post-control---next">›</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
