import styles from './Task.module.css';
import { TaskItem } from './TaskItem';

export function Task() {
    return (
        <article className={styles.task}>
            <header className={styles.infosTasks}>
                <div className={styles.infosTasksCC}>
                    <span className={styles.textTaskCreated}>Tarefas Criadas</span>
                    <div className={styles.counterTaskCreated}>5</div>
                </div>

                <div className={styles.infosTasksCC}>
                    <span className={styles.textTaskConclude}>Concluídas</span>
                    <div className={styles.counterTaskConclude}>2 de 5</div>
                </div>
            </header>

            {/* {tasks.length === 0 ? <Empty /> */}
            <div className={styles.taskItems}>
                <TaskItem />
            </div> 
            {/* } */}

        </article>
    );
}