import React from 'react';
import './TodoList.css';
import TodoListItem from "../todoListItem/TodoListItem";
import ModalWindow from "../modalWindow/ModalWindow";
import Preloader from "../UI/preloader/Preloader";

const TodoList = (props) => {
    const items = props.tasks;
    //filter to render correct tasks
    const filterItems = (items, filter) => {
        switch (filter) {
            case 'completed':
                return items.filter(item => item.isDone);
            case 'uncompleted':
                return items.filter(item => !item.isDone);
            default:
                return items;
        }
    };
    //Filter items depending on search value
    const searchItems = (items, searchValue) => searchValue.length === 0
        ? items
        : items.filter(item => {
            return item.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
        });

    const renderItems = props.isFetching
        ? <Preloader/>
        : filterItems(searchItems(items, props.searchValue), props.filter).map(task => {
            let {...taskProps} = task;
            return <li key={task.id} className="list-group-item list-group-item-action">
                <TodoListItem
                    {...taskProps}
                    refreshTask={props.refreshTask}
                    toggleIsDone={props.toggleIsDone}
                    toggleIsImportant={props.toggleIsImportant}
                    editTask={props.editTask}
                    deleteTask={props.deleteTask}
                />
            </li>
        });
    const modal = (
        props.isEditing && <ModalWindow
            updatedTitleBody={props.updatedTitleBody}
            currentEditingTask={props.currentEditingTask[0]}
            updateTitleBody={props.updateTitleBody}
            refreshTask={props.refreshTask}
            editTask={props.editTask}
        />
    );
    return (
        <div className="todoListWrapper">
            <ul className="list-group">
                {renderItems}
            </ul>
            {modal}
        </div>
    );
};

export default TodoList;
