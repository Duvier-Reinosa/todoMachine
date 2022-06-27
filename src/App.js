import './App.css';
import React, {useState} from "react";
import { AppUi } from './AppUi';

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
    <AppUi 
      completedTodos={completedTodos} 
      totalTodos={totalTodos}
      searchValue={searchValue} 
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
