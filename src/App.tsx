import React from 'react';
import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    // Add new Todo to prevTodos state and Return new array of Todos.
    // DO NOT edit or return existing Todo state.
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    })
  }

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      // Keep all the IDs that do not match.
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
