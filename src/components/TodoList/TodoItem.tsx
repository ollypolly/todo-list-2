import { Todo } from '../../types/Todo';

type TodoItemProps = Todo & {
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodoItem = ({
  id,
  completed,
  description,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) => {
  return (
    <div className="flex items-center justify-between p-2">
      <input
        id={`${id}-checkbox`}
        type="checkbox"
        onChange={() => toggleTodo(id)}
        checked={completed}
        aria-checked={completed}
        className="m-2"
      />
      <label htmlFor={`${id}-checkbox`} className="m-2 cursor-pointer">
        <p className={completed ? 'line-through' : ''}>{description}</p>
      </label>
      <button
        onClick={() => deleteTodo(id)}
        aria-label="Delete this todo"
        className="m-2"
      >
        delete
      </button>
    </div>
  );
};
