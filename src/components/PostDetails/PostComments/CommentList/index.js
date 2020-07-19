import React from 'react';
import PropTypes from 'prop-types';

import PostCommentForm from '../PostCommentForm';
import { countTotalComments } from '../../../../utils';

CommentList.propTypes = {
  postCurrentId: PropTypes.string,
  commentsCurrent: PropTypes.array,
  children: PropTypes.array,
  showModal: PropTypes.func.isRequired,
  addPostCommentRequest: PropTypes.func.isRequired,
  toggleLoading: PropTypes.func.isRequired,
  displayName: PropTypes.string,
};

CommentList.defaultProps = {
  postCurrentId: '',
  commentsCurrent: '',
  displayName: '',
  children: [],
};

export default function CommentList({
  postCurrentId,
  commentsCurrent,
  children,
  showModal,
  addPostCommentRequest,
  toggleLoading,
  displayName,
}) {
  const totalComments =
    countTotalComments(commentsCurrent) + commentsCurrent.length;

  return (
    <section id="section-comments">
      <div className="row">
        <h3 className="post-comment__heading">
          Comments
          {totalComments ? (
            <span className="post-comment__amount">{totalComments}</span>
          ) : null}
        </h3>
      </div>
      <div className="row">
        {children}
        <PostCommentForm
          displayName={displayName}
          showModal={showModal}
          toggleLoading={toggleLoading}
          postCurrentId={postCurrentId}
          addPostCommentRequest={addPostCommentRequest}
        />
      </div>
    </section>
  );
}
