import { useEffect } from 'react';
import { useState } from 'react';
import { EmptyTask } from './EmptyTask';
import styles from './Task.module.css';
import { TaskItem } from './TaskItem';

export function Task({ task, setTask }) {
    const [tasksChacked, setTasksChacked] = useState(0)
    
    useEffect(() => qtdChecked, [task])

    function qtdChecked() {
        let contador = 0

        task.forEach(element => {
            if (element.isChecked) {
                contador = contador + 1
            }
        });

        setTasksChacked(contador)
    }
    
    return (
        <article className={styles.task}>
            <header className={styles.infosTasks}>
                <div className={styles.infosTasksCC}>
                    <span className={styles.textTaskCreated}>Tarefas Criadas</span>
                    <div className={styles.counterTaskCreated}>{task.length}</div>
                </div>

                <div className={styles.infosTasksCC}>
                    <span className={styles.textTaskConclude}>Concluídas</span>
                    <div className={styles.counterTaskConclude}>{tasksChacked} de {task.length}</div>
                </div>
            </header>

            {task.length === 0 ? (
                <div className={styles.taskItems}>
                    <EmptyTask />
                </div>
            ) : (
                <div className={styles.taskItems}>
                    {task.map(item => (
                        <TaskItem 
                            key={item.id}
                            id={item.id}
                            content={item.content}
                            isChecked={item.isChecked}
                            task={item.task}
                            setTask={item.setTask}
                        />
                    ))}
                </div> 
            )
            
            }

        </article>
    );
}