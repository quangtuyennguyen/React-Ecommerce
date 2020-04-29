import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { CarouselProvider } from '../../commons/CarouselProvider/CarouselProvider';
import { twoSidePerRowSettings } from '../../constants/carousel';
import { filterAndCountComments } from '../../utils';
import { PostSlideItem } from '../PostSlideItem/PostSlideItem';

PostSlide.propTypes = {
  posts: PropTypes.array,
  postComments: PropTypes.array,
};

PostSlide.defaultProps = {
  posts: [],
  postComments: [],
};

export const PostSlide = ({ posts, postComments }) => {
  const renderPostsSlide = () =>
    _.map(posts, ({ id, title, images, date, useravatar }) => (
      <PostSlideItem
        id={id}
        key={id}
        title={_.capitalize(title)}
        images={images}
        date={date}
        useravatar={useravatar}
        countComments={filterAndCountComments(postComments, id)}
      />
    ));

  return (
    <section id="section-posts-featured">
      <div className="row">
        <CarouselProvider settings={twoSidePerRowSettings}>
          {renderPostsSlide()}
        </CarouselProvider>
      </div>
    </section>
  );
};
