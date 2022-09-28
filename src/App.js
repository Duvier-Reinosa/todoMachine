import './App.css';
import React, {useEffect, useState} from "react";
import { AppUi } from './AppUi';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.title.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const TodoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[TodoIndex].completed = true;
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const deleteTodo = (text) => {
    const TodoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(TodoIndex, 1);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  useEffect(() => {
    setLoading(true);
    if (localStorage.getItem('todos') !== null){
        setTodos(JSON.parse(localStorage.getItem('todos'))); 
    }
    setLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[localStorage.getItem('todos')]);

  return (
    <AppUi 
      completedTodos={completedTodos} 
      totalTodos={totalTodos}
      searchValue={searchValue} 
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      showModal={showModal}
      setShowModal={setShowModal}
      loading={loading}
    />
  );
}

export default App;
