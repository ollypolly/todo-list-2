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
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input type="checkbox" onChange={() => toggleTodo(todo)} />
          <p>{todo.description}</p>
        </div>
      ))}
      <div>
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          onKeyUp={(event) => event.key === 'Enter' && handleAddTodo()}
        />
        <button onClick={handleAddTodo}>Add todo</button>
      </div>
    </>
  );
};
