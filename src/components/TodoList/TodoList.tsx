import { useTodos } from './useTodos';

export const TodoList = () => {
  const { todos } = useTodos();

  return (
    <>
      {todos.map((todo) => (
        <>
          <input type="checkbox" />
          <p>{todo.description}</p>
        </>
      ))}
    </>
  );
};
