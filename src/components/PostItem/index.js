import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import slug from 'slug';

PostItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  images: PropTypes.array,
  date: PropTypes.number,
  tags: PropTypes.array,
  useravatar: PropTypes.string,
  username: PropTypes.string,
  totalComments: PropTypes.number,
};

PostItem.defaultProps = {
  id: '',
  title: '',
  body: '',
  images: [],
  date: '',
  tags: [],
  useravatar: '',
  username: '',
  totalComments: 0,
};

export default function PostItem({
  id,
  title,
  body,
  images,
  date,
  tags,
  useravatar,
  username,
  totalComments,
}) {
  const renderPostImage = () => {
    if (images.length) {
      return (
        <Link to={`/blog/${slug(title.toLowerCase())}.${id}`}>
          <div className="post__box-image post__box-image--set-height">
            <img src={images[0]} alt={title} />
          </div>
        </Link>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="post">
      {renderPostImage()}
      <div className="post__details">
        <Link to={`/blog/${slug(title.toLowerCase())}.${id}`}>
          <h4 className="post__title post__title--small">
            {_.capitalize(title)}
          </h4>
        </Link>
        <p className="post__desc post__desc--ellipsis">{body}</p>
        <div className="btn-group">
          {_.map(tags, tag => (
            <a key={tag} href="/" className="btn btn--outline--small">
              {tag}
            </a>
          ))}
        </div>
      </div>
      <a href="/">
        <div className="post__info">
          <div className="post__author">
            <div className="post__author-details">
              <div className="post__author-outline">
                <img
                  className="post__author-avt"
                  src={useravatar}
                  alt={title}
                />
              </div>
              <span className="post__author-name">{username}</span>
            </div>
            <div className="post__time">
              <span className="post__time-month">
                <Moment format="MMM DD">{date}</Moment>
              </span>
              <span className="post__underline" />
              <span className="post__comment-amount">
                <i className="far fa-comment-dots" />
                {totalComments ? totalComments : null}
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
