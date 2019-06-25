import React from 'react';
import styles from './AppHeader.module.css';

const AppHeader = (props) => {
    const unComplete = props.tasks.filter(task => !task.isDone);
    const complete = props.tasks.filter(task => task.isDone);
    return (
        <div className={styles.appHeaderWrapper}>
            <h1>Todo List</h1>
            <span>{unComplete.length} left, </span>
            <span>{complete.length} done</span>
        </div>
    );
};

export default AppHeader;
