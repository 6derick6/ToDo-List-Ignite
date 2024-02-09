import styles from './TaskItem.module.css';
import { Trash } from 'phosphor-react';
import Check from '../assets/check.png';
import Checked from '../assets/checked.png';

export function TaskItem({ id, content, isChecked }) {
    return (
        <div>
            <div className={styles.taskItem}>
                <div className={styles.taskItemBox}>
                    <div className={styles.taskCheckBox}>
                        <img src={isChecked ? Checked : Check} className={styles.taskCheckBox} />
                        <span className={styles.text}>{content}</span>
                    </div>
                    {/* <span className={done ? styles.textDone : styles.text}></span> */}
                    <button title='Deletar Tarefa'>
                        <Trash size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}