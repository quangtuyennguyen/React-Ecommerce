import * as types from '../actions/types';

const INITIAL_STATE = null;

export const ratingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.FILTER_BY_RATING:
            const { payload } = action;
            return payload;
        case types.CLEAR_RATING:
            return null;
        default:
            return state;
    };
};