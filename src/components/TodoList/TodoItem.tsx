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
  const isMoveDownDisabled = index === todosLength - 1;

  return (
    <div className="flex items-center p-2 flex-wrap gap-2 hover:bg-gray-700 rounded-sm">
      <button
        disabled={isMoveUpDisabled}
        aria-disabled={isMoveUpDisabled}
        onClick={handleMoveUp}
      >
        ↑
      </button>
      <button
        disabled={isMoveDownDisabled}
        aria-disabled={isMoveDownDisabled}
        onClick={handleMoveDown}
      >
        ↓
      </button>
      <input
        id={`${id}-checkbox`}
        type="checkbox"
        onChange={() => toggleTodo(id)}
        checked={completed}
        aria-checked={completed}
        className="h-4 w-4 m-2 focus:ring-2 focus:ring-red-500"
      />
      <label
        htmlFor={`${id}-checkbox`}
        className="cursor-pointer flex-grow text-left"
      >
        <p className={completed ? 'line-through' : ''}>{description}</p>
      </label>
      <button
        onClick={() => deleteTodo(id)}
        aria-label="Delete this todo"
        className="m-2 text-white p-2 rounded-lg hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        ✖
      </button>
    </div>
  );
};
