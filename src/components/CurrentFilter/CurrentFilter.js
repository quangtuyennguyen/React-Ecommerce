import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { RANGER_VALUES as RANGER_DATA } from '../../constants/index';


const CurrentFilter = ({
    range, sizeValue,
    ratingValue,
    setRange,
    clearFilterBySize,
    clearFilterByRating, filterByRange
}) => {
    const { min, max } = range;
    const { min: minInitial, max: maxInitial } = RANGER_DATA;
    const handleClearFilters = () => {
        handleClearRangeSlide({ min: minInitial, max: maxInitial });
        clearFilterBySize();
        clearFilterByRating();
    };

    const handleClearFilterBySize = () => {
        clearFilterBySize(() => {
            // do something
        });
    };

    const handleClearFilterByRating = () => {
        clearFilterByRating(() => {
            // do something
        });
    };

    const handleClearRangeSlide = () => {
        setRange({ min: minInitial, max: maxInitial });
        filterByRange({ min: minInitial, max: maxInitial })
        // do something
    };

    return (
        ((min !== minInitial || max !== maxInitial) || ratingValue || sizeValue.length) ? (
            <div className="filter-product">
                <h4 className="filter-product__heading">CURRENT FILTERS: </h4>
                <ul className="filter-product__list">
                    {min !== minInitial || max !== maxInitial ? (
                        <li onClick={handleClearRangeSlide} className="filter-product__item">
                            ${min}.00 - ${max}.00
                            <span className="filter-product__remove">×</span>
                        </li>
                    ) : null}
                    {ratingValue && (
                        <li onClick={handleClearFilterByRating} className="filter-product__item">
                            {`Bigger ${ratingValue > 1 ? ratingValue + ' stars' : ratingValue + ' star'}`}
                            <span className="filter-product__remove">×</span>
                        </li>
                    )}
                    {sizeValue.length ? (
                        <li onClick={handleClearFilterBySize} className="filter-product__item">
                            {sizeValue.join(', ')}
                            <span className="filter-product__remove">×</span>
                        </li>
                    ) : null
                    }
                    {(min !== minInitial || max !== maxInitial) || ratingValue || sizeValue.length ?
                        <li
                            onClick={handleClearFilters}
                            className="filter-product__item">
                            <i className="far fa-trash-alt"></i>
                        </li>
                        : null}
                </ul>
            </div>
        ) : null
    );
};

const mapStateToProps = state => ({
    sizeValue: state.sizeValue,
    ratingValue: state.ratingValue
});

export default connect(mapStateToProps, actions)(CurrentFilter);