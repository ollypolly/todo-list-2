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
    <div
      aria-live="polite"
      className="flex flex-col max-w-2xl mx-auto h-full w-full"
    >
      <div className="flex flex-col flex-grow">
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
      </div>

      <div className="flex mt-3 flex-wrap gap-2">
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          onKeyUp={(event) => event.key === 'Enter' && handleAddTodo()}
          className="p-2 flex-grow"
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
