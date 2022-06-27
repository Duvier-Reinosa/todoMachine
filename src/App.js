import './App.css';
import React, {useState} from "react";
import { CreateTodoButton } from "./createTodoButton/CreateTodoButton";
import { TodoCounter } from "./todoCounter/TodoCounter";
import { TodoItem } from "./todoItem/TodoItem";
import { TodoList } from "./todoList/TodoList";
import { TodoSearch } from "./todoSearch/TodoSearch";

const defaultTodos = [
  {text: 'llorar con la llorona', completed: true},
  {text: 'cortar cebolla', completed: false}
]

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(defaultTodos);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const TodoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[TodoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const TodoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(TodoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <div className='appContainer'>
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <h3>Mis tareas</h3>
      <TodoList>
        {
          searchedTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}/>
          ))
        }
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
