import './App.css';
import React from "react";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

const todos = [
  {text: 'cortar cebolla', complete: false},
  {text: 'cortar cebolla', complete: false},
  {text: 'cortar cebolla', complete: false},
  {text: 'cortar cebolla', complete: false},
  {text: 'cortar cebolla', complete: false},
  {text: 'cortar cebolla', complete: false},
  {text: 'cortar cebolla', complete: false},
]

function App() {
  return (
    <div className='appContainer'>
      <TodoCounter />
      <TodoSearch />
      <h3>Mis tareas</h3>
      <TodoList>
        {
          todos.map(todo => (
            <TodoItem key={todo.text} text={todo.text}/>
          ))
        }
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
