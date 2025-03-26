import { useState } from 'react';
import { Todo } from '../../types/Todo';
import { generateId } from '../../utils/generateId';

const initialTodos: Todo[] = [
  {
    id: '1',
    description: 'My test todo',
    completed: false,
  },
  {
    id: '2',
    description: 'My second test todo',
    completed: false,
  },
];

export const useTodos = () => {
  // Todo state - could be pulled from an api
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodo: Partial<Todo>) =>
    setTodos([
      ...todos,
      {
        id: generateId(),
        completed: false,
        description: '',
        ...newTodo,
      },
    ]);

  const updateTodo = (updatedTodo: Partial<Todo> & Pick<Todo, 'id'>) =>
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

  const toggleTodo = (id: string) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );

  const deleteTodo = (id: string) =>
    setTodos(todos.filter((todo) => todo.id !== id));

  return {
    todos,
    addTodo,
    updateTodo,
    toggleTodo,
    deleteTodo,
  };
};
