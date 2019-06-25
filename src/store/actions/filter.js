import * as actionTypes from "./actionTypes";

export const filterCompleted = () => ({type: actionTypes.FILTER_COMPLETED});
export const filterUnCompleted = () => ({type: actionTypes.FILTER_UNCOMPLETED});
export const filterAll = () => ({type: actionTypes.FILTER_All});
