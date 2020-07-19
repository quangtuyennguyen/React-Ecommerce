import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import * as actions from '../../actions';
import BreadCrumb from '../../components/BreadCrumb';
import CommentItem from '../../components/PostDetails/PostComments/CommentItem';
import CommentList from '../../components/PostDetails/PostComments/CommentList';
import PostRelated from '../../components/PostDetails/PostRelated';
import PostWrapper from '../../components/PostDetails/PostWrapper';

PostDetails.propTypes = {
  posts: PropTypes.array,
  displayName: PropTypes.string,
  addReplyRequest: PropTypes.func.isRequired,
  addPostCommentRequest: PropTypes.func.isRequired,
  postComments: PropTypes.array,
  toggleLoading: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};

PostDetails.defaultProps = {
  posts: [],
  displayName: '',
  postComments: [],
};

function PostDetails({
  posts,
  displayName,
  addReplyRequest,
  addPostCommentRequest,
  postComments,
  toggleLoading,
  showModal,
}) {
  let { pathname } = useLocation();
  let { id } = useParams();
  const otherPosts = [];
  const postNears = [];

  const findPost = () =>
    _.filter(posts, (post, index) => {
      if (post.id === id) {
        postNears.push(posts[index - 1], posts[index + 1]);
        return post;
      } else {
        otherPosts.length <= 5 && otherPosts.push(post);
      }
    });

  const [postCurrent] = findPost() || {};

  useEffect(() => {
    const value = pathname.split('/').pop();
    document.title = _.startCase(_.lowerCase(value));
  }, [pathname]);

  const commentsCurrent = _.filter(postComments, ({ postId }) => postId === id);

  const renderPostComment = () =>
    _.map(
      commentsCurrent,
      ({ postId, id, username, body, useravatar, replys, date }) => (
        <CommentItem
          key={id}
          id={id}
          postId={postId}
          body={body}
          userAvatar={useravatar}
          userName={username}
          date={date}
          replys={replys}
          addReplyRequest={addReplyRequest}
          toggleLoading={toggleLoading}
          showModal={showModal}
          displayName={displayName}
        />
      ),
    );

  return posts.length ? (
    <Fragment>
      <BreadCrumb currentPage="Post Details" />
      <PostWrapper
        postCurrent={postCurrent}
        otherPosts={otherPosts.slice(0, 3)}
        postNears={postNears}
      />
      <CommentList
        toggleLoading={toggleLoading}
        postCurrentId={id}
        addPostCommentRequest={addPostCommentRequest}
        commentsCurrent={commentsCurrent}
        displayName={displayName}
        showModal={showModal}
      >
        {renderPostComment()}
      </CommentList>
      <PostRelated otherPosts={otherPosts} />
    </Fragment>
  ) : null;
}

const mapStateToProps = state => ({
  posts: state.posts,
  postComments: state.postComments,
  displayName: state.userInfo.displayName,
});

export default connect(mapStateToProps, actions)(PostDetails);
