import styles from './TaskItem.module.css';
import { Trash } from 'phosphor-react';
import Check from '../assets/check.png';
import Checked from '../assets/checked.png';

export function TaskItem() {
    return (
        <div>
            <div className={styles.taskItem}>
                <div className={styles.taskItemBox}>
                    <div className={styles.taskCheckBox}>
                        <img src={Check}/>
                        {/* <img src={done ? checked : check} className={styles.taskCheckBox} /> */}
                    </div>
                    <span className={styles.text}>Integer urna interdum massa libero auctor neque turpis turpis semper.  Duis vel sed fames integer.</span>
                    {/* <span className={done ? styles.textDone : styles.text}></span> */}
                    <button title='Deletar Tarefa'>
                        <Trash size={18} />
                    </button>
                </div>
            </div>

            <div className={styles.taskItem}>
                <div className={styles.taskItemBox}>
                    <div className={styles.taskCheckBox}>
                        <img src={Check}/>
                        {/* <img src={done ? checked : check} className={styles.taskCheckBox} /> */}
                    </div>
                    <span className={styles.text}>Integer urna interdum massa libero auctor neque turpis turpis semper.  Duis vel sed fames integer.</span>
                    {/* <span className={done ? styles.textDone : styles.text}></span> */}
                    <button title='Deletar Tarefa'>
                        <Trash size={18} />
                    </button>
                </div>
            </div>

            <div className={styles.taskItem}>
                <div className={styles.taskItemBox}>
                    <div className={styles.taskCheckBox}>
                        <img src={Check}/>
                        {/* <img src={done ? checked : check} className={styles.taskCheckBox} /> */}
                    </div>
                    <span className={styles.text}>Integer urna interdum massa libero auctor neque turpis turpis semper.  Duis vel sed fames integer.</span>
                    {/* <span className={done ? styles.textDone : styles.text}></span> */}
                    <button title='Deletar Tarefa'>
                        <Trash size={18} />
                    </button>
                </div>
            </div>

            <div className={styles.taskItem}>
                <div className={styles.taskItemBox}>
                    <div className={styles.taskCheckBox}>
                        <img src={Checked} />
                        {/* <img src={done ? checked : check} className={styles.taskCheckBox} /> */}
                    </div>    
                    <span className={styles.textDone}>Integer urna interdum massa libero auctor neque turpis turpis semper.  Duis vel sed fames integer.</span>
                    {/* <span className={done ? styles.textDone : styles.text}></span> */}
                    <button title='Deletar Tarefa'>
                        <Trash size={18} />
                    </button>
                </div>
            </div>

            <div className={styles.taskItem}>
                <div className={styles.taskItemBox}>
                    <div className={styles.taskCheckBox}>
                        <img src={Checked} />
                        {/* <img src={done ? checked : check} className={styles.taskCheckBox} /> */}
                    </div>    
                    <span className={styles.textDone}>Integer urna interdum massa libero auctor neque turpis turpis semper.  Duis vel sed fames integer.</span>
                    {/* <span className={done ? styles.textDone : styles.text}></span> */}
                    <button title='Deletar Tarefa'>
                        <Trash size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}