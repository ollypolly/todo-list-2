import { useState } from 'react';
import './App.css';
import { Todo } from './types/Todo';
import { TodoList } from './components/TodoList';

const initialTodos: Todo[] = [
  {
    id: '1',
    description: 'My test todo',
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <>
      <h1>Todo List</h1>
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
