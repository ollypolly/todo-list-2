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
        <div key={id} className="flex items-center justify-between p-2">
          <input
            id={`${id}-checkbox`}
            type="checkbox"
            onChange={() => toggleTodo(id)}
            checked={completed}
            aria-checked={completed}
            className="m-2"
          />
          <label htmlFor={`${id}-checkbox`} className="m-2">
            <p className={completed ? 'line-through' : ''}>{description}</p>
          </label>
          <button
            onClick={() => deleteTodo(id)}
            aria-label="Delete this todo"
            className="m-2"
          >
            delete
          </button>
        </div>
      ))}
      <div className="flex mt-3">
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          onKeyUp={(event) => event.key === 'Enter' && handleAddTodo()}
          className="mr-2 p-2"
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
