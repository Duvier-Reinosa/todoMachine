// import './App.css';
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
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {
          todos.map(todo => (
            <TodoItem text={todo.text}/>
          ))
        }
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
