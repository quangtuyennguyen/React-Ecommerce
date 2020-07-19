import PropTypes from 'prop-types';
import React from 'react';

import Pagination from '../Pagination';

PostList.propTypes = {
  children: PropTypes.array,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func.isRequired,
  total: PropTypes.number,
};

PostList.defaultProps = {
  currentPage: 0,
  children: [],
  total: 0,
};

export default function PostList({
  children,
  currentPage,
  setCurrentPage,
  total,
}) {
  const renderPosts = () => {
    const result = [];
    const postPerCol = 3;
    const cols = children.length / postPerCol;
    for (let i = 0; i < cols; i++) {
      result.push(
        <div key={i} className="col span_1_of_3">
          {children.slice(postPerCol * i, postPerCol * i + postPerCol)}
        </div>,
      );
    }
    return result;
  };

  return (
    <section id="section-posts">
      <div className="row">{renderPosts()}</div>
      <Pagination
        total={total}
        customClass="row pagination"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
}
