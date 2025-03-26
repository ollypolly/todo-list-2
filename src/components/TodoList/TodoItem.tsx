import { Todo } from '../../types/Todo';

type TodoItemProps = Todo & {
  index: number;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  reorderTodo: (id: string, endIndex: number) => void;
  todosLength: number;
};

export const TodoItem = ({
  id,
  index,
  completed,
  description,
  toggleTodo,
  deleteTodo,
  reorderTodo,
  todosLength,
}: TodoItemProps) => {
  const handleMoveUp = () => reorderTodo(id, index - 1);
  const handleMoveDown = () => reorderTodo(id, index + 1);

  const isMoveUpDisabled = index === 0;
  const isMoveDownDisabled = index === todosLength;

  return (
    <div className="flex items-center justify-between p-2">
      <button
        disabled={isMoveUpDisabled}
        aria-disabled={isMoveUpDisabled}
        onClick={handleMoveUp}
      >
        up
      </button>
      <button
        disabled={isMoveDownDisabled}
        aria-disabled={isMoveDownDisabled}
        onClick={handleMoveDown}
      >
        down
      </button>
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
