import React from 'react';
import styles from './ModalWindow.module.css';
import {CloseBtn, UpdateBtn} from "../UI/buttons/Buttons";

const ModalWindow = (props) => {
    //update state if value have changed
    const onChange = (e) => {
        let updatedTitleBody = e.target.value;
        props.updateTitleBody(updatedTitleBody)
    };
    //update current task
    const onUpdate = () => {
        if (props.updatedTitleBody !== '') {
            let task = props.currentEditingTask;
            props.refreshTask(task.id, props.updatedTitleBody, task.isImportant, task.isDone)
        }
    };
    //toggling state
    const onClose = () => {
        props.editTask(null, false)
    };
    return (
        <div className={styles.backdrop} role="dialog">
            <div className={styles.modal}>
                <div className={styles.modalContentWrapper}>
                    <div>
                        <CloseBtn onClick={onClose}/>
                        <h3>Edit task title</h3>
                    </div>
                    <div className={styles.modalBodyWrapper}>
                        <div className={styles.formWrapper}>
                            <input className="form-control"
                                   value={props.updatedTitleBody}
                                   onChange={onChange}
                                   placeholder={props.currentEditingTask.title}
                            />
                        </div>
                        <div className={styles.btnWrapper}>
                            <UpdateBtn onClick={onUpdate}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;
