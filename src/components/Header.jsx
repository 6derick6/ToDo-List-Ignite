import styles from './Header.module.css';

import toDoLogo from '../assets/logo.png'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={toDoLogo} alt='ToDo Logo' />
        </header>
    );
}