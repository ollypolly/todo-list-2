import { useState } from 'react';
import { useTodos } from './useTodos';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const { todos, addTodo, toggleTodo, deleteTodo, reorderTodo } = useTodos();
  const [description, setDescription] = useState('');

  const handleAddTodo = () => {
    if (!description.trim()) return;

    addTodo({ description });
    setDescription('');
  };

  return (
    <div aria-live="polite">
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          {...todo}
          index={index}
          todosLength={todos.length}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          reorderTodo={reorderTodo}
        />
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
