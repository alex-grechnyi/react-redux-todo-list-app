import {updateObject} from "../../shared/utility/utility";
import * as actionTypes from "../actions/actionTypes";

let initialState = {
    tasks: [],
    newTitleBody: '',
    updatedTitleBody: '',
    searchValue: '',
    isEditing: false,
    editTaskId: '',
    currentEditingTask: [],
    isFetching: false
};

const toggle = (state, action) => {
    return {
        tasks: [...state.tasks.map(task => task.id === action.id
            ? {...task, body: !task.body}
            : task
        )]
    }
};

const setTasks = (state, action) => {
    return updateObject(state, {tasks: action.tasks})
};
const addTask = (state, action) => {
    const newTask = {
        ...action.data
    };
    const updatedState = {
        tasks: [...state.tasks, newTask],
        newTitleBody: ''
    };
    return updateObject(state, updatedState)
};
const updateTask = (state, action) => {
    const updatedTask = {
        title: action.title,
        isImportant: action.isImportant,
        isDone: action.isDone
    };
    const updatedState = {
        isEditing: false,
        tasks: [...state.tasks.map(task => task.id === action.id
            ? {...task, ...updatedTask}
            : task
        )],
        updatedTitleBody: ''
    };
    return updateObject(state, updatedState)
};
const deleteTask = (state, action) => {
    const updatedState = {tasks: state.tasks.filter(task => task.id !==action.id)};
    return updateObject(state, updatedState)
};
const editTask = (state, action) => {
    const updatedState = {
        isEditing: true,
        editTaskId: action.id,
        currentEditingTask: state.tasks.filter(task => task.id === action.id)
    };
    if (action.id !== null) {
    return updateObject(state, updatedState)}
    return updateObject(state, {isEditing: action.isEditing})
};
const toggleIsImportant = (state, action) => {
    return updateObject(state, toggle(state, action))
};
const toggleIsDone = (state, action) => {
    return updateObject(state, toggle(state, action))
};
const updateNewTitleBody = (state, action) => {
    return updateObject(state, {newTitleBody: action.body})
};
const updateTitleBody = (state, action) => {
    return updateObject(state, {updatedTitleBody: action.body})
};
const updateSearchValue = (state, action) => {
    return updateObject(state, {searchValue: action.searchValue})
};
const toggleIsFetching = (state, action) => {
    return updateObject(state, {isFetching: action.isFetching})
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_TASKS: return setTasks(state, action);
        case actionTypes.ADD_TASK: return addTask(state, action);
        case actionTypes.UPDATE_TASK: return updateTask(state, action);
        case actionTypes.DELETE_TASK: return deleteTask(state, action);
        case actionTypes.EDIT_TASK: return editTask(state, action);
        case actionTypes.TOGGLE_IS_IMPORTANT: return toggleIsImportant(state, action);
        case actionTypes.TOGGLE_IS_DONE: return toggleIsDone(state, action);
        case actionTypes.UPDATE_NEW_TITLE_BODY: return updateNewTitleBody(state, action);
        case actionTypes.UPDATE_TITLE_BODY: return updateTitleBody(state, action);
        case actionTypes.UPDATE_SEARCH_VALUE: return updateSearchValue(state, action);
        case actionTypes.TOGGLE_IS_FETCHING: return toggleIsFetching(state, action);
        default:
            return state;

    }
};

export default tasksReducer