import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

PostGallery.propTypes = {
  images: PropTypes.array,
};

PostGallery.defaultProps = {
  images: [],
};

export default function PostGallery({ images }) {
  const [firstUrl, secondUrl, lastUrl] = images;

  const [state, setState] = useState({
    photoIndex: 0,
    isOpen: false,
  });
  const { photoIndex, isOpen } = state;
  return (
    <Fragment>
      <div className="row u-margin-none">
        <div className="col span_2_of_3">
          <div
            onClick={() => setState({ isOpen: true, photoIndex: 0 })}
            className="post__image-box"
          >
            <img className="post__image" src={firstUrl} alt="" />
            <i className="far fa-plus-square" />
            <span className="post__caption">Gallery image caption #1</span>
          </div>
        </div>
        <div className="col span_1_of_3">
          <div
            onClick={() => setState({ isOpen: true, photoIndex: 1 })}
            className="post__image-box"
          >
            <img className="post__image" src={secondUrl} alt="" />
            <i className="far fa-plus-square" />
            <span className="post__caption">Gallery image caption #2</span>
          </div>
          <div
            onClick={() => setState({ isOpen: true, photoIndex: 2 })}
            className="post__image-box"
          >
            <img className="post__image" src={lastUrl} alt="" />
            <i className="far fa-plus-square" />
            <span className="post__caption">Gallery image caption #3</span>
          </div>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setState({ isOpen: false })}
          onMovePrevRequest={() =>
            setState({
              photoIndex: (photoIndex + images.length - 1) % images.length,
              isOpen: true,
            })
          }
          onMoveNextRequest={() =>
            setState({
              photoIndex: (photoIndex + 1) % images.length,
              isOpen: true,
            })
          }
        />
      )}
    </Fragment>
  );
}
