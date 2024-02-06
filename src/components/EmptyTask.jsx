import styles from './EmptyTask.module.css';
import Clipboard from '../assets/Clipboard.png';

export function EmptyTask() {
    return (
        <div className={styles.empty}>
            <div className={styles.emptyContent}>
                <img src={Clipboard} />
                <span>Você ainda não tem tarefas cadastradas</span>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    );
}