import { useReducer } from 'react';
import TodoContext from './TodoContext';
import { reducer, initialState } from './reducer';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import styles from './TodoApp.module.css';

const TodoCSSModules = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className={styles.page}>

        {/* Nav */}
        <nav className={styles.nav}>
          <button className={`${styles.navBtn} ${styles.navBtnActive}`}>Todo App</button>
          <button className={styles.navBtn}>Study Timer</button>
        </nav>

        {/* Card */}
        <div className={styles.card}>
          <h2 className={styles.title}>My Todo List</h2>
          <TodoForm />
          <TodoList />
        </div>

      </div>
    </TodoContext.Provider>
  );
};

export default TodoCSSModules;
