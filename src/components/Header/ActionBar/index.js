import classnames from 'classnames';
import _ from 'lodash';
import React, { useRef, useState } from 'react';

import useEscKeydown from '../../../utils/useEscKeydown';
import useClickOutside from '../../../utils/useClickOutside';

export default () => {
  const refSub = useRef();
  const refMain = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [indexCurrent, setIndexCurrent] = useState(0);

  const contents = [
    'Free shipping for order over $200',
    'We return money within 30 days',
    'Friendly 24/7 customer support',
  ];

  useClickOutside(refMain, refSub, () => setIsOpen(false)); // handle click outside
  useEscKeydown(() => {
    // handle close press the key escape
    setIsOpen(false);
  });

  const renderContent = () =>
    _.map(contents, (item, index) => (
      <span
        key={item}
        className={classnames('normal', { active: index === indexCurrent })}
      >
        {item}
      </span>
    ));

  return (
    <div className="top-bar">
      <div className="row">
        <div className="col span_1_of_3">
          <div className="top-bar__text-left">
            <p className="top-bar__text-details">
              <i className="fas fa-headphones" />
              <span>Support </span>
              (00) 33 169 7720
            </p>
          </div>
        </div>
        <div className="col span_1_of_3">
          <div className="top-bar__text-center">
            <p className="top-bar__text-details">
              <span
                id="header-button-prev"
                onClick={() =>
                  setIndexCurrent(indexCurrent > 0 ? indexCurrent - 1 : 0)
                }
                className="control-angle control-angle-left"
              >
                &#8249;
              </span>
              {renderContent()}
              <span
                id="header-button-next"
                onClick={() =>
                  setIndexCurrent(indexCurrent < 2 ? indexCurrent + 1 : 2)
                }
                className="control-angle control-angle-right"
              >
                &#8250;
              </span>
            </p>
          </div>
        </div>
        <div className="col span_1_of_3">
          <div className="top-bar__text-right">
            <p className="top-bar__text-details">
              <a href="/" className="top-bar__link">
                <i className="fas fa-map-marker-alt" />
                Order tracking
              </a>
            </p>
            <div className="top-bar__dropdown">
              <span
                ref={refSub}
                onClick={() => setIsOpen(!isOpen)}
                className="top-bar__link dropdown__toggle"
              >
                <img
                  src="https://res.cloudinary.com/shopping-assets/image/upload/v1584264070/en_flag_icon_blafgn.png"
                  alt="English"
                />
                Eng/$
              </span>
              {isOpen && (
                <ul ref={refMain} className="top-bar__dropdown-menu show">
                  <li className="top-bar__dropdown-item">
                    <a href="/" className="top-bar__dropdown-link">
                      <img
                        src="https://res.cloudinary.com/shopping-assets/image/upload/v1584264070/vn_flag_icon_cgpwsm.gif"
                        alt="Vietnamese"
                      />
                      Vietnamese
                    </a>
                  </li>
                  <li className="top-bar__dropdown-item">
                    <a href="/" className="top-bar__dropdown-link">
                      <img
                        src="https://res.cloudinary.com/shopping-assets/image/upload/v1584264070/fr_flag_icon_limqev.png"
                        alt="French"
                      />
                      French
                    </a>
                  </li>
                  <li className="top-bar__dropdown-item">
                    <a href="/" className="top-bar__dropdown-link">
                      <img
                        src="https://res.cloudinary.com/shopping-assets/image/upload/v1584264070/it_flag_icon_o96hg4.png"
                        alt="Italian"
                      />
                      Italian
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
