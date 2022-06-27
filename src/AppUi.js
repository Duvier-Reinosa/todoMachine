import './App.css';
import React from "react";
import { CreateTodoButton } from "./createTodoButton/CreateTodoButton";
import { TodoCounter } from "./todoCounter/TodoCounter";
import { TodoItem } from "./todoItem/TodoItem";
import { TodoList } from "./todoList/TodoList";
import { TodoSearch } from "./todoSearch/TodoSearch";

const AppUi = ({ completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo}) => {
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
};

export { AppUi };