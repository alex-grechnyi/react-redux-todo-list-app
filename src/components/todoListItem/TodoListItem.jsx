import React from 'react';
import styles from './TodoListItem.module.css';
import {UpdateBtn, DeleteBtn, ImportantBtn, CompleteBtn, UnCompleteBtn, ImportantBtnAct} from "../UI/buttons/Buttons";

const TodoListItem = (props) => {
    //boolean flags
    const isImportant = props.isImportant;
    const isDone = props.isDone;
    //send delete task request
    const onDelete = () => {
        props.deleteTask(props.id)
    };
    //add current edit task to state
    const onEdit = () => {
        props.editTask(props.id);
    };
    //toggling important value and send request
    const toggleIsImportant = () => {
        // force update of boolean value to send correct request
        let refreshedIsImportant = !isImportant;
        props.toggleIsImportant(refreshedIsImportant);
        props.refreshTask(props.id, props.title, refreshedIsImportant, props.isDone);
    };
    //toggling done value and send request
    const toggleIsDone = () => {
        let refreshedIsDone = !isDone;
        props.toggleIsDone(refreshedIsDone);
        props.refreshTask(props.id, props.title, props.isImportant, refreshedIsDone);
    };
    //add the right class to the element
    let classNames = ``;
    if (isImportant) {
        classNames += ` ${styles.titleBodyImportant}`;
    }
    if (isDone) {
        classNames += ` ${styles.titleBodyDone}`;
    }
    return (
        <div className={styles.taskWrapper}>
            <div onClick={toggleIsDone}>
                {
                    props.isDone
                        ? <CompleteBtn/>
                        : <UnCompleteBtn/>
                }
            </div>
            <div className={styles.taskBodyWrapper}>
                <span className={classNames.trim()}>{props.title}</span>
            </div>
            <div className={styles.btnWrapper}>
                <DeleteBtn onClick={onDelete}/>
                <UpdateBtn onClick={onEdit}/>
                <span onClick={toggleIsImportant}>
                    {
                        isImportant
                            ? <ImportantBtnAct/>
                            : <ImportantBtn/>
                    }
                </span>
            </div>
        </div>
    );
};

export default TodoListItem;
