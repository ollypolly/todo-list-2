import { useState } from 'react';
import { useTodos } from './useTodos';

export const TodoList = () => {
  const { todos, toggleTodo, addTodo, deleteTodo } = useTodos();
  const [description, setDescription] = useState('');

  const handleAddTodo = () => {
    if (!description.trim()) return;

    addTodo({ description });
    setDescription('');
  };

  return (
    <div aria-live="polite">
      {todos.map(({ id, completed, description }) => (
        <div key={id}>
          <input
            id={`${id}-checkbox`}
            type="checkbox"
            onChange={() => toggleTodo(id)}
            checked={completed}
            aria-checked={completed}
          />
          <label htmlFor={`${id}-checkbox`}>
            <p className={completed ? 'line-through' : ''}>{description}</p>
          </label>
          <button onClick={() => deleteTodo(id)} aria-label="Delete this todo">
            delete
          </button>
        </div>
      ))}
      <div>
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          onKeyUp={(event) => event.key === 'Enter' && handleAddTodo()}
        />
        <button
          disabled={!description.trim()}
          onClick={handleAddTodo}
          aria-label="Add a new todo"
        >
          Add todo
        </button>
      </div>
    </div>
  );
};
