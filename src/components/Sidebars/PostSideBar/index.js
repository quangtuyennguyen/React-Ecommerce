import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import slug from 'slug';
import { BLOG_TAGS } from '../../../constants';

PostSideBar.propTypes = {
  otherPosts: PropTypes.array,
};

PostSideBar.defaultProps = {
  otherPosts: [],
};

export default function PostSideBar({ otherPosts }) {
  const { pathname } = useLocation();

  const renderTags = () =>
    _.map(BLOG_TAGS, tag => (
      <Link key={tag} to={pathname} className="btn btn--outline--small">
        {tag}
      </Link>
    ));

  const renderPosts = () =>
    _.map(otherPosts, ({ id, images, title, userName }) => (
      <li key={id} className="post__trending-item">
        <Link to={`/blog/${slug(title.toLowerCase())}.${id}`}>
          <img src={images[0]} alt="" className="post__trending-image" />
        </Link>
        <div className="post__details">
          <Link
            to={`/blog/${slug(title.toLowerCase())}.${id}`}
            className="post__title post__title--small u-margin-none"
          >
            {_.capitalize(title)}
          </Link>
          <p className="post__desc post__desc--muted">{userName}</p>
        </div>
      </li>
    ));

  return (
    <div className="col span_1_of_3 u-padding-left-regular">
      <div className="post__trending">
        <h5 className="post__heading">Blog categories</h5>
        <ul className="post__trending-list">{renderPosts()}</ul>
      </div>
      <div className="post__tags-box">
        <h5 className="post__heading">Popular tags</h5>
        <div className="post__tags">{renderTags()}</div>
      </div>
      <div className="post__banner u-center-text u-margin-top-medium">
        <img
          src="https://demo.createx.studio/cartzilla/img/blog/banner-bg.jpg"
          alt=""
          className="post__image"
        />
        <div className="post__banner-text">
          <h4 className="post__heading">Lorem ipsum dolor sit.</h4>
          <p className="post__banner-desc">Lorem, ipsum dolor.</p>
          <Link to="/contact" className="btn btn--secondary">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
