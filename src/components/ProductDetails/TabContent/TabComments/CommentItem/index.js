import classnames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import Moment from 'react-moment';

import { renderRating } from '../../../../../utils';

export default class CommentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      disliked: false,
    };
    this.updateLikes = this.updateLikes.bind(this);
    this.updateDislikes = this.updateDislikes.bind(this);
    this.handleClickLike = this.handleClickLike.bind(this);
    this.handleClickDislike = this.handleClickDislike.bind(this);
  }

  updateLikes() {
    this.setState(
      {
        liked: !this.state.liked,
      },
      () => {
        const { id, likeAndDislikeRequest } = this.props;
        likeAndDislikeRequest(id, 'like', this.state.liked ? 1 : -1);
      },
    );
  }

  updateDislikes() {
    this.setState(
      {
        disliked: !this.state.disliked,
      },
      () => {
        const { id, likeAndDislikeRequest } = this.props;
        likeAndDislikeRequest(id, 'dislike', this.state.disliked ? 1 : -1);
      },
    );
  }

  handleClickLike() {
    const { liked, disliked } = this.state;

    if (disliked) {
      this.updateDislikes();
    }

    this.updateLikes(liked);
  }

  handleClickDislike() {
    const { liked, disliked } = this.state;

    if (liked) {
      this.updateLikes();
    }

    this.updateDislikes(disliked);
  }

  render() {
    const {
      avatar,
      like,
      pros,
      cons,
      dislike,
      username,
      date,
      rating,
      body,
    } = this.props;

    const { disliked, liked } = this.state;

    return (
      <div className="comment u-border-small">
        <div className="comment__author-box u-d-flex-left">
          <div className="comment__author u-d-flex-left">
            <img src={avatar} alt="" />
            <div className="comment__author-details">
              <h5 className="comment__author-name">{username}</h5>
              <span className="comment__author-time">
                <Moment format="MMMM DD, YYYY">{date}</Moment>
              </span>
            </div>
          </div>
          <div>
            <div className="product__rating">{renderRating(rating)}</div>
            <p className="comment__rating-desc">
              83% of users found this review helpful
            </p>
          </div>
        </div>
        <p className="comment__desc">{_.capitalize(body)}</p>
        <h6 className="comment__pros">
          Pros: <span>{_.capitalize(pros)}</span>
        </h6>
        <h6 className="comment__cons">
          Cons: <span>{_.capitalize(cons)}</span>
        </h6>
        <div className="comment__like-box u-d-flex-left">
          <div className={classnames('comment__like', { active: liked })}>
            <i onClick={this.handleClickLike} className="far fa-thumbs-up" />
            <span>{like}</span>
          </div>
          <div className={classnames('comment__dislike', { active: disliked })}>
            <i
              onClick={this.handleClickDislike}
              className="far fa-thumbs-down"
            />
            <span>{dislike}</span>
          </div>
        </div>
      </div>
    );
  }
}

CommentItem.propTypes = {
  id: PropTypes.string,
  avatar: PropTypes.string,
  like: PropTypes.number,
  pros: PropTypes.string,
  cons: PropTypes.string,
  dislike: PropTypes.number,
  username: PropTypes.string,
  date: PropTypes.number,
  rating: PropTypes.number,
  body: PropTypes.string,
  likeAndDislikeRequest: PropTypes.func.isRequired,
};

CommentItem.defaultProps = {
  id: '',
  avatar: '',
  like: 0,
  pros: '',
  cons: '',
  dislike: 0,
  username: '',
  date: 0,
  rating: 0,
  body: '',
};
