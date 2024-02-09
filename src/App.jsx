import { useState } from 'react';
import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Task } from './components/Task';

export function App() {
  const [task, setTask] = useState([])

  return (
    <div>
      <Header />
        <div className={styles.content}>
          <NewTask setTask={setTask} task={task} />
          <Task task={task} setTask={setTask} />
        </div>
    </div>
  );
}
