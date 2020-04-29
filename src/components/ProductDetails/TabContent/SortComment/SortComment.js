import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import { SORT_COMMENT as SORTS } from '../../../../constants/index';
import { useEscKeydown } from '../../../../utils/useEscKeydown';
import { useOutsideClick } from '../../../../utils/useOutsideClick';

SortComment.propTypes = {
  sortComments: PropTypes.func.isRequired,
};

export const SortComment = ({ sortComments }) => {
  const refMain = useRef();
  const refSub = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [sortName, setSortName] = useState('Popular');

  const handleSortProducts = (sort, name) => {
    setSortName(name);
    sortComments(sort);
  };

  const renderSort = () =>
    _.map(SORTS, ({ name, sort }) => (
      <button
        type="button"
        key={name}
        onClick={() => handleSortProducts(sort, name)}
        className={`sort__btn${sortName === name ? ' sort__btn--active' : ''}`}
      >
        {name}
      </button>
    ));

  useOutsideClick(refMain, refSub, () => setIsOpen(false));
  useEscKeydown(() => {
    // handle close press the key escape
    setIsOpen(false);
  });

  return (
    <div className="box-sort u-margin-bottom-small">
      <div className="sort">
        <span className="sort__text">Sort by:</span>
        <div className="sort__wrap">
          <button
            type="button"
            ref={refSub}
            onClick={() => setIsOpen(!isOpen)}
            className="sort__heading"
          >
            {sortName}
          </button>
          {isOpen && (
            <div ref={refMain} className="sort__box">
              {renderSort()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
