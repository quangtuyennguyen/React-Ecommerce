import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import slug from 'slug';
import PropTypes from 'prop-types';

PostSlideItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  images: PropTypes.array,
  commentQuantity: PropTypes.number,
  date: PropTypes.number,
  useravatar: PropTypes.string,
  username: PropTypes.string,
};

PostSlideItem.defaultProps = {
  id: '',
  title: '',
  images: [],
  commentQuantity: 0,
  date: 0,
  useravatar: '',
  username: '',
};

export default function PostSlideItem({
  id,
  title,
  images,
  commentQuantity,
  date,
  useravatar,
  username,
}) {
  return (
    <div className="post post--heading">
      <Link to={`/blog/${slug(title.toLowerCase())}.${id}`}>
        <div className="post__box-image">
          <img src={images[0]} alt="" />
          <div className="post__time">
            <i className="far fa-clock" />
            <Moment format="MMM DD">{date}</Moment>
          </div>
        </div>
      </Link>
      <div className="post__details">
        <Link to={`/blog/${slug(title.toLowerCase())}.${id}`}>
          <h3 className="post__title post__title--big">{title}</h3>
          <span className="post__comment-amount">
            <i className="far fa-comment-dots" />
            {commentQuantity ? commentQuantity : null}
          </span>
        </Link>
        <div className="post__info">
          <div className="post__author">
            <div className="post__author-details">
              <div className="post__author-outline">
                <img className="post__author-avt" src={useravatar} alt="" />
              </div>
              <span className="post__author-name">{username}</span>
            </div>
            <span className="post__underline" />
            <span className="post__desc">in Lifestyle, Nutrition</span>
          </div>
        </div>
      </div>
    </div>
  );
}
