import styles from './TaskItem.module.css';
import { Trash } from 'phosphor-react';
import Check from '../assets/check.png';
import Checked from '../assets/checked.png';
import { useState } from 'react';

export function TaskItem({ id, content, isChecked, task, setTask, setUpdateCheck }) {

    function handleDeleteTask(id) {

        const tasksWithoutDeletedOne = task.filter(tasks => {
            return tasks.id != id;
        })

        setTask(tasksWithoutDeletedOne);
    }
    console.log(task)

    return (
        <div>
            <div className={styles.taskItem}>
                <div className={styles.taskItemBox}>
                    <div className={styles.taskCheckBox} onClick={() => setUpdateCheck(id)}>
                        <img src={isChecked ? Checked : Check} className={styles.taskCheckBox} />
                        <span className={styles.text}>{content}</span>
                    </div>
                    {/* <span className={task.isChecked ? styles.textDone : styles.text}></span> */}
                    <button title='Deletar Tarefa' onClick={() => handleDeleteTask(id)}>
                        <Trash size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}