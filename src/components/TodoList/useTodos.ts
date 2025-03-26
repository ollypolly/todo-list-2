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

  const reorderTodo = (id: string, endIndex: number) => {
    const newTodos = [...todos];

    const startIndex = newTodos.findIndex((todo) => todo.id === id);
    if (startIndex === -1) return;

    const [movedTodo] = newTodos.splice(startIndex, 1);
    newTodos.splice(endIndex, 0, movedTodo);

    setTodos(newTodos);
  };

  return {
    todos,
    addTodo,
    updateTodo,
    toggleTodo,
    deleteTodo,
    reorderTodo,
  };
};
