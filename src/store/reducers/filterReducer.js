import * as actionTypes from "../actions/actionTypes";

let initialState = {
    filter: 'all',
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FILTER_COMPLETED:
            return {
                ...state,
                filter: 'completed'
            };
        case actionTypes.FILTER_UNCOMPLETED:
            return {
                ...state,
                filter: 'uncompleted'
            };
        case actionTypes.FILTER_All:
            return {
                ...state,
                filter: 'all'
            };

        default:
            return state;

    }
};
export default filterReducer