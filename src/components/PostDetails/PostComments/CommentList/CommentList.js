import React from 'react';
import PostCommentForm from '../PostCommentForm/PostCommentForm';
import { countTotalComments } from '../../../../utils';

export const CommentList = ({
    postCurrentId,
    commentsCurrent,
    children, showModal,
    addPostCommentRequest,
    toggleLoading, displayName,
}) => {
    const totalComments = countTotalComments(commentsCurrent) + commentsCurrent.length;

    return (
        <section id="section-comments">
            <div className="row">
                <h3 className="post-comment__heading">Comments
                    {totalComments ? <span className="post-comment__amount">{totalComments}</span> : null}
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
};