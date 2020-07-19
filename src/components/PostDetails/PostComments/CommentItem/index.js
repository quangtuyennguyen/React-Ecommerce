import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Moment from 'react-moment';
import PostCommentForm from '../PostCommentForm';

CommentItem.propTypes = {
  userName: PropTypes.string,
  date: PropTypes.number,
  replys: PropTypes.object,
  showModal: PropTypes.func.isRequired,
  id: PropTypes.string,
  body: PropTypes.string,
  userAvatar: PropTypes.string,
  addReplyRequest: PropTypes.func.isRequired,
  toggleLoading: PropTypes.func.isRequired,
  displayName: PropTypes.string,
};

CommentItem.defaultProps = {
  userName: '',
  date: 0,
  replys: {},
  id: '',
  body: '',
  userAvatar: '',
  displayName: '',
};

export default function CommentItem({
  userName,
  date,
  replys,
  showModal,
  id,
  body,
  userAvatar,
  addReplyRequest,
  toggleLoading,
  displayName,
}) {
  const [openForm, setOpenForm] = useState(false);
  const renderReplys = () =>
    _.map(replys, ({ id, body, useravatar, date, username }) => (
      <div
        key={id}
        className="post-comment__item post-comment__item--child u-border-none"
      >
        <div className="post-comment__image-box">
          <img className="post-comment__image" src={useravatar} alt="" />
        </div>
        <div className="post-comment__box-text">
          <div className="post-comment__details">
            <h6 className="post-comment__title">
              {username}
              <span
                onClick={() => setOpenForm(true)}
                className="post-comment__reply"
              >
                <i className="fas fa-reply" />
                Reply
              </span>
            </h6>
            <p className="post-comment__desc">{_.capitalize(body)}</p>
            <span className="post-comment__time">
              <i className="far fa-clock" />
              <Moment format="DD, MMMM">{date}</Moment>
            </span>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="post-comment__item post-comment__item--dad">
      <div className="post-comment__image-box">
        <img className="post-comment__image" src={userAvatar} alt="" />
      </div>
      <div className="post-comment__box-text">
        <div className="post-comment__details">
          <h6 className="post-comment__title">
            {userName}
            <span
              onClick={() => setOpenForm(true)}
              className="post-comment__reply"
            >
              <i className="fas fa-reply" />
              Reply
            </span>
          </h6>
          <p className="post-comment__desc">{_.capitalize(body)}</p>
          <span className="post-comment__time">
            <i className="far fa-clock" />
            <Moment format="DD, MMMM">{date}</Moment>
          </span>
          {replys && renderReplys()}
          {openForm && (
            <PostCommentForm
              toggleLoading={toggleLoading}
              addReplyRequest={addReplyRequest}
              commentId={id}
              displayName={displayName}
              showModal={showModal}
            />
          )}
        </div>
      </div>
    </div>
  );
}
