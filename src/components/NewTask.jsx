import styles from './NewTask.module.css';
import Plus from '../assets/plus.png';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EmptyTask } from './EmptyTask';

export function NewTask({task, setTask}) {
    const [content, setContent] = useState('')

    function handleNewTask() {
        if(content == ''){
            alert('Você precisa preencher para adicionar à lista!')
            return 
        }
        const id = uuidv4()
        
        const newTask = 
        {
            id,
            content,
            isChecked: false,
        }

        setTask([newTask, ...task])

        setContent('')
    }

    return(
        <div className={styles.content}>
            <input 
                value={content}
                onChange={(event) => setContent(event.target.value)}
                type="text" 
                placeholder="Adicione uma nova tarefa"
            />
            <button onClick={handleNewTask}>
                <span>Criar</span>
                <img src={Plus} />
            </button>
        </div>
    );
} 