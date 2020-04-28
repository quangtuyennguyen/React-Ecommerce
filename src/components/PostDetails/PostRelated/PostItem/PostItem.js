import React from 'react';
import slug from 'slug';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

export const PostItem = ({ 
    id, image, username,
    title, body, date
 }) => {
    return (
        <div className="col span_1_of_3">
            <div className="post">
                <Link to={`/blog/${slug(title.toLowerCase())}.${id}`}>
                    <div className="post__box-image">
                        <img src={image} alt="" />
                    </div>
                </Link>
                <div className="post__details">
                    <div className="post__time">
                        <span className="post__time-text">{username}</span>
                        <span className="post__underline" style={{ marginTop: '0.4rem' }} />
                        <span className="post__time-text">
                            <Moment format="MMM DD">{date}</Moment>
                        </span>
                    </div>
                    <Link to={`/blog/${slug(title.toLowerCase())}.${id}`} className="post__title post__title--small">{title}</Link>
                    <p className="post__desc post__desc--ellipsis">{body}</p>
                </div>
            </div>
        </div>
    );
};
