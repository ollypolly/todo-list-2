import { useState } from 'react';
import { useTodos } from './useTodos';

export const TodoList = () => {
  const { todos, toggleTodo, addTodo } = useTodos();
  const [description, setDescription] = useState('');

  const handleAddTodo = () => {
    if (!description.trim()) return;

    addTodo({ description });
    setDescription('');
  };

  return (
    <div aria-live="polite">
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            id={`${todo.id}-checkbox`}
            type="checkbox"
            onChange={() => toggleTodo(todo)}
            aria-checked={todo.completed}
          />
          <label htmlFor={`${todo.id}-checkbox`}>
            <p>{todo.description}</p>
          </label>
        </div>
      ))}
      <div>
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          onKeyUp={(event) => event.key === 'Enter' && handleAddTodo()}
        />
        <button disabled={!description} onClick={handleAddTodo}>
          Add todo
        </button>
      </div>
    </div>
  );
};
