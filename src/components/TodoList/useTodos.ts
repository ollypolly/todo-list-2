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

  const toggleTodo = ({ id, completed }: Todo) =>
    updateTodo({ id, completed: !completed });

  const deleteTodo = (todoToDelete: Todo) =>
    setTodos(todos.filter((todo) => todo.id !== todoToDelete.id));

  return {
    todos,
    addTodo,
    updateTodo,
    toggleTodo,
    deleteTodo,
  };
};
