import { useTodos } from './useTodos';

export const TodoList = () => {
  const { todos } = useTodos();

  return (
    <>
      {todos.map((todo) => (
        <p>{todo.description}</p>
      ))}
    </>
  );
};
