import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../../../actions';
import {
  countTotalRating,
  filterProductComments,
  renderRating,
  sortComments,
} from '../../../../../utils';
import SortComment from '../../SortComment';
import CommentItem from '../CommentItem';
import CommentStat from '../CommentStats';
import PostComment from '../PostComment';

CommentList.propTypes = {
  comments: PropTypes.array,
  sort: PropTypes.object,
  displayName: PropTypes.string,
  productCurrentId: PropTypes.string,
  sortComments: PropTypes.func.isRequired,
  addProductCommentRequest: PropTypes.func.isRequired,
  likeAndDislikeRequest: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  toggleLoading: PropTypes.func.isRequired,
};

CommentList.defaultProps = {
  comments: [],
  sort: {},
  displayName: '',
  productCurrentId: '',
};

function CommentList({
  comments,
  sort,
  displayName,
  productCurrentId,
  sortComments: sortCommentsAction,
  addProductCommentRequest,
  likeAndDislikeRequest,
  showModal,
  toggleLoading,
}) {
  const [commentsCurrent, setCommentsCurrent] = useState(3);
  const filterComments = filterProductComments(comments, productCurrentId);

  const filterBySort = () => sortComments([...filterComments], sort);
  const renderCommentItem = () =>
    _.map(filterBySort().slice(0, commentsCurrent), comment => (
      <CommentItem
        key={comment.id}
        likeAndDislikeRequest={likeAndDislikeRequest}
        {...comment}
      />
    ));

  const handleShowComment = value => {
    setCommentsCurrent(commentsCurrent + value);
  };

  return (
    <div className="tab__reviews moveToTop">
      {filterComments.length ? (
        <div className="wrapper-stats u-border-small u-padding-bottom-medium">
          <div className="row u-padding-none">
            <div className="col span_1_of_3">
              <div className="comment__stats">
                <h3 className="comment__title">
                  {filterComments.length} Reviews
                </h3>
                <div className="u-d-flex-left">
                  <div className="product__rating">{renderRating(4)}</div>
                  <span className="comment__text">
                    {Math.round(
                      (countTotalRating(filterComments) /
                        filterComments.length) *
                        10,
                    ) / 10}{' '}
                    Overall rating
                  </span>
                </div>
                <p className="comment__desc">
                  58 out of 74 (77%)
                  <br />
                  Customers recommended this product
                </p>
              </div>
            </div>
            <div className="col span_2_of_3">
              <div className="progress">
                <CommentStat
                  comments={filterComments}
                  totalComment={filterComments.length}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="wrapper-comment">
        <SortComment sortComments={sortCommentsAction} />
        <div className="row u-padding-none">
          <div className="col span_3_of_5">
            <div className="comment-box">
              {renderCommentItem()}
              {filterComments.length > 3 ? (
                commentsCurrent < filterComments.length ? (
                  <button
                    type="button"
                    onClick={() => handleShowComment(3)}
                    className="btn btn--outline"
                  >
                    Load more reviews
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleShowComment(-(commentsCurrent - 3))}
                    className="btn btn--outline"
                  >
                    Load less reviews
                  </button>
                )
              ) : null}
            </div>
          </div>
          <div className="col span_2_of_5">
            <PostComment
              toggleLoading={toggleLoading}
              addProductCommentRequest={addProductCommentRequest}
              productCurrentId={productCurrentId}
              displayName={displayName}
              showModal={showModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  sort: state.sortComment,
  comments: state.productComments,
  displayName: state.userInfo.displayName,
});

export default connect(mapStateToProps, actions)(CommentList);
