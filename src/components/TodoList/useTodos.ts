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

  const addTodo = (newTodo: Todo) => setTodos([...todos, newTodo]);

  const updateTodo = (updatedTodo: Todo) =>
    setTodos(
      todos.map((todo) =>
        todo.id === updatedTodo.id
          ? {
              ...todo,
              ...updatedTodo,
            }
          : todo
      )
    );

  const deleteTodo = (todoToDelete: Todo) =>
    setTodos(todos.filter((todo) => todo.id !== todoToDelete.id));

  return {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
  };
};
