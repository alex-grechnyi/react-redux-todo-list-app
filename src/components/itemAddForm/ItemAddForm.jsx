import React from 'react';
import styles from './ItemAddForm.module.css';
import {AddBtn, ImportantBtn} from "../UI/buttons/Buttons";

const ItemAddForm = (props) => {
    //boolean flag
    let isImportant = false;
    //Send request
    const onSendTask = () => props.sendTask(props.newTitleBody, isImportant);
    //Add changed title value to state
    const onChange = (e) => {
        let titleBody = e.target.value;
        props.updateNewTitleBody(titleBody)
    };
    //toggling boolean flag
    let toggleIsImportant = () => isImportant = !isImportant;
    //Send request if user hit enter
    let ifEnter = (e) => e.which === 13 && onSendTask();
    return (
        <div className={styles.addFormWrapper}>
            <div className={styles.formWrapper}>
                <input onChange={onChange} value={props.newTitleBody} onKeyDown={ifEnter}
                       placeholder="What else need to be done?" className="form-control"/>
            </div>
            <div className={styles.btnWrapper}>
                <AddBtn onClick={props.newTitleBody !== '' ? onSendTask : null}/>
                <ImportantBtn onClick={toggleIsImportant}/>
            </div>
        </div>
    );
};

export default ItemAddForm;
