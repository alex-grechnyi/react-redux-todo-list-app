import {tasksAPI} from "../../api/api";
import * as actionTypes from "./actionTypes";

const fetchingTasks = (data) => {
    const fetchedTasks = [];
    for (let key in data) {
        fetchedTasks.push({id: key, ...data[key]})
    }
    return fetchedTasks
};
const catchError = (error) => alert(error);

export const updateNewTitleBody = (body) =>({type: actionTypes.UPDATE_NEW_TITLE_BODY, body});
export const updateTitleBody = (body) =>({type: actionTypes.UPDATE_TITLE_BODY, body});
export const toggleIsImportant = (id) => ({type: actionTypes.TOGGLE_IS_IMPORTANT, id});
export const toggleIsDone = (id) => ({type: actionTypes.TOGGLE_IS_DONE, id});
export const setTasks = (tasks) => ({type: actionTypes.SET_TASKS, tasks});
export const removeTask = (id) => ({type: actionTypes.DELETE_TASK, id});
export const editTask = (id=null, isEditing=null) => ({type: actionTypes.EDIT_TASK, id, isEditing});
export const addTask = (title, id, isImportant) => {
    return {
        type: actionTypes.ADD_TASK,
        data: {title, id, isImportant}
    }
};
export const updateTask = (id, title, isImportant, isDone) => {
    return {
        type: actionTypes.UPDATE_TASK, id, title, isImportant, isDone
    }
};
export const updateSearchValue = (searchValue) => {
    return {
        type: actionTypes.UPDATE_SEARCH_VALUE,
        searchValue: searchValue
    }
};
export const toggleIsFetching = (isFetching) => ({type: actionTypes.TOGGLE_IS_FETCHING, isFetching});

export const getTasks = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        tasksAPI.getTasks()
            .then((data) => {
                dispatch(toggleIsFetching(false));
                dispatch(setTasks(fetchingTasks(data.data)));
            })
            .catch(catchError)
    }
};
export const sendTask = (title, isImportant) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        tasksAPI.addTask(title, isImportant)
            .then((data) => {
                dispatch(toggleIsFetching(false));
                dispatch(addTask(title, data.data.name, isImportant));
            })
            .catch(catchError)
    }
};
export const deleteTask = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        tasksAPI.deleteTask(id)
            .then(() => {
                dispatch(toggleIsFetching(false));
                dispatch(removeTask(id));
            })
            .catch(catchError)
    }
};
export const refreshTask = (id, title, isImportant, isDone) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        tasksAPI.updateTask(id, title, isImportant, isDone)
            .then(() => {
                dispatch(toggleIsFetching(false));
                dispatch(updateTask(id, title, isImportant, isDone));
            })
            .catch(catchError)
    }
};