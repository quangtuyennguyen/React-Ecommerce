import _ from 'lodash';
import React, { useState, useRef } from 'react';

import { SORT_COMMENT as SORTS } from '../../../../constants/index';
import { useOutsideClick } from '../../../../utils/useOutsideClick';
import { useEscKeydown } from '../../../../utils/useEscKeydown';


export const SortComment = ({ sortComments }) => {
    const refMain = useRef();
    const refSub = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [sortName, setSortName] = useState('Popular');

    const handleSortProducts = (sort, name) => {
        setSortName(name);
        sortComments(sort)
    };

    const renderSort = () => (
        _.map(SORTS, ({ name, sort }) => (
            <button
                key={name}
                onClick={() => handleSortProducts(sort, name)}
                className={`sort__btn${sortName === name ? ' sort__btn--active' : ''}`}>
                {name}
            </button>
        ))
    );

    useOutsideClick(refMain, refSub, () =>  setIsOpen(false));
    useEscKeydown(() => { // handle close press the key escape
        setIsOpen(false);
    });

    return (
        <div className="box-sort u-margin-bottom-small">
            <div className="sort">
                <span className="sort__text">Sort by:</span>
                <div className="sort__wrap">
                    <button ref={refSub} onClick={() => setIsOpen(!isOpen)} className="sort__heading">{sortName}</button>
                    {isOpen && <div ref={refMain} className="sort__box">
                        {renderSort()}
                    </div>}
                </div>
            </div>
        </div>
    );
};
