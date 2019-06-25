import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import TodoList from "../components/todoList/TodoList";
import {
    refreshTask, deleteTask, getTasks, updateTitleBody,
    editTask, toggleIsImportant, toggleIsDone
} from "../store/actions/tasks";


class TodoListContainer extends React.Component {
    componentDidMount() {
        this.props.getTasks()
    }
    render() {
        return <TodoList {...this.props}/>
    }
}



TodoListContainer.propTypes = {
    tasks: PropTypes.array,
    updatedTitleBody: PropTypes.string,
    isEditing: PropTypes.bool,
    editTaskId: PropTypes.string,
    filter: PropTypes.string,
    searchValue: PropTypes.string,
    currentEditingTask: PropTypes.array,
    isFetching: PropTypes.bool,
    toggleIsDone: PropTypes.func,
    toggleIsImportant: PropTypes.func,
    editTask: PropTypes.func,
    updateTitleBody: PropTypes.func,
    refreshTask: PropTypes.func,
    deleteTask: PropTypes.func,
    getTasks: PropTypes.func
};


const mapStateToProps = (state) => {
    return {
        tasks: state.tasksReducer.tasks,
        updatedTitleBody: state.tasksReducer.updatedTitleBody,
        isEditing: state.tasksReducer.isEditing,
        editTaskId: state.tasksReducer.editTaskId,
        filter: state.filterReducer.filter,
        searchValue: state.tasksReducer.searchValue,
        currentEditingTask: state.tasksReducer.currentEditingTask,
        isFetching: state.tasksReducer.isFetching
    }
};

const mapDispatchToProps = {toggleIsDone, toggleIsImportant, editTask,
    updateTitleBody, refreshTask, deleteTask, getTasks};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
