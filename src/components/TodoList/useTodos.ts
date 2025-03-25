// handleAddTodo, handleUpdateTodo, handleDeleteTodo, handleReorderTodo

import { useState } from 'react';
import { Todo } from '../../types/Todo';

const initialTodos: Todo[] = [
  {
    id: '1',
    description: 'My test todo',
    completed: false,
  },
];

export const useTodos = () => {
  // Todo state - could be pulled from an api
  const [todos, setTodos] = useState(initialTodos);

  const handleAddTodo = (newTodo: Todo) => setTodos([...todos, newTodo]);

  return {
    todos,
    handleAddTodo,
  };
};
