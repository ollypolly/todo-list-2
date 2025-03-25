import { Todo } from '../../types/Todo';

type TodoListProps = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
};

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <>
      {todos.map((todo) => (
        <p>{todo.description}</p>
      ))}
    </>
  );
};
