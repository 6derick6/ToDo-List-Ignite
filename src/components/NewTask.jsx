import styles from './NewTask.module.css';
import Plus from '../assets/plus.png';

export function NewTask() {
    return(
        <div className={styles.content}>
            <input 
                type="text" 
                placeholder="Adicione uma nova tarefa"
            />
            <button>
                <span>Criar</span>
                <img src={Plus} />
            </button>
        </div>
    );
} 