import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function PostTags() {
  const { pathname } = useLocation();
  return (
    <div className="row u-margin-top-medium u-margin-horizontal-none">
      <div className="col span_1_of_2">
        <div className="post__tags">
          <div className="btn-group">
            <Link to={pathname} className="btn btn--outline--small">
              #merchandise
            </Link>
            <Link to={pathname} className="btn btn--outline--small">
              #printed tshirts
            </Link>
          </div>
        </div>
      </div>
      <div className="col span_1_of_2">
        <div className="post__share">
          <p className="post__share-text">Share post: </p>
          <ul className="post__share-list">
            <li className="post__share-item">
              <Link to={pathname} className="post__share-link">
                <i className="fab fa-facebook-f" />
              </Link>
            </li>
            <li className="post__share-item">
              <Link to={pathname} className="post__share-link">
                <i className="fab fa-twitter" />
              </Link>
            </li>
            <li className="post__share-item">
              <Link to={pathname} className="post__share-link">
                <i className="fab fa-pinterest-p" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
