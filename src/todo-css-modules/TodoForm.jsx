import { useState, useContext } from 'react';
import TodoContext from './TodoContext';
import styles from './TodoForm.module.css';

const TodoForm = () => {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TodoContext);

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({
        type: 'add',
        payload: { id: Date.now(), text, completed: false },
      });
      setText('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <div className={styles.form}>
      <input
        className={styles.input}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add a new todo..."
      />
      <button className={styles.addBtn} onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoForm;
