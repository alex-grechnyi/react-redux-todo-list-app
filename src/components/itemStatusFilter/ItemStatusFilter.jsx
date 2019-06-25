import React from 'react';
import styles from './ItemStatusFilter.module.css';

const ItemStatusFilter = (props) => {
    //Change filter in state
    const all = () => props.filterAll();
    const uncompleted = () => props.filterUnCompleted();
    const completed = () => props.filterCompleted();
    //array of buttons which would be rendered
    const buttonsArr = [
        {name: 'completed', label: 'Done', action: completed},
        {name: 'uncompleted', label: 'Active', action: uncompleted},
        {name: 'all', label: 'All', action: all}
    ];
    const buttons = buttonsArr.map(btn => {
        //boolean flag to show active button
        const isActive = props.filter === btn.name;
        const clazz = isActive ? 'btn-primary' : 'btn-outline-dark';
        return <span key={btn.name} className={`btn ${clazz}`} onClick={btn.action}>{btn.label}</span>
    });
    return (
        <div className={styles.filterWrapper}>
            {buttons}
        </div>
    );
};

export default ItemStatusFilter;
