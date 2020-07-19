import _ from 'lodash';
import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import CarouselProvider from '../../commons/CarouselProvider';
import { oneSidePerRowSettings } from '../../constants/carousel';
import { SLIDER_HEADER } from '../../constants';
import ActionBar from './ActionBar';
import Navbar from './Navbar';
// import { useEffect } from 'react';

export default function Header() {
  const history = useHistory();
  const { pathname } = history.location;
  const ref = useRef();
  const header = useRef();

  // const handleScroll = () => {
  // };

  // useEffect(() => {
  //     window.addEventListener('scroll', handleScroll)
  // });

  const renderSideItem = () =>
    _.map(
      SLIDER_HEADER,
      ({ headingSub, headingMain, image, subMove, mainMove, btnAnimation }) => (
        <div key={headingSub} className="item">
          <img src={image} alt={headingMain} />
          <div className="slick-box-content">
            <div className="heading-primary">
              <h4 ref={ref} className={`heading-primary--sub ${subMove}`}>
                {headingSub}
              </h4>
              <h2 className={`heading-primary--main ${mainMove}`}>
                {headingMain}
                <br />
                COMPARISONS
              </h2>
            </div>
            <Link to="/shop" className={`btn btn--primary ${btnAnimation}`}>
              Show Now
              <span className="angle-right">&#8250;</span>
            </Link>
          </div>
        </div>
      ),
    );

  return (
    <header ref={header} id="header" className="header">
      <ActionBar />
      <Navbar />
      {pathname === '/' && (
        <CarouselProvider
          settings={{ ...oneSidePerRowSettings, className: 'header__carousel' }}
        >
          {renderSideItem()}
        </CarouselProvider>
      )}
    </header>
  );
}
