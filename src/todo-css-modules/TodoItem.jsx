import { useContext } from 'react';
import TodoContext from './TodoContext';
import styles from './TodoItem.module.css';

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <li className={`${styles.item} ${todo.completed ? styles.itemCompleted : ''}`}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch({ type: 'toggle', payload: todo.id })}
      />
      <span
        className={`${styles.text} ${todo.completed ? styles.textCompleted : ''}`}
        onClick={() => dispatch({ type: 'toggle', payload: todo.id })}
      >
        {todo.text}
      </span>
      <button
        className={styles.deleteBtn}
        onClick={() => dispatch({ type: 'delete', payload: todo.id })}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
