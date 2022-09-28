import './App.css';
import React from "react";
import { CreateTodoButton } from "./createTodoButton/CreateTodoButton";
import { TodoCounter } from "./todoCounter/TodoCounter";
import { TodoItem } from "./todoItem/TodoItem";
import { TodoList } from "./todoList/TodoList";
import { TodoSearch } from "./todoSearch/TodoSearch";
import { TodoModal } from './todoModal/TodoModal';

const AppUi = ({ completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo, showModal, setShowModal, loading}) => {
    return (
        <div className='appContainer'>
            { showModal && <TodoModal setShowModal={setShowModal} />}
            <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos}/>
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
            <h3>Mis tareas</h3>
            <TodoList>
                {loading && <p>Cargando...</p>}
                {(!loading && !searchedTodos.length) && <p>Crea una tarea</p>}

                {
                 !loading && searchedTodos.map(todo => (
                    <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    title={todo.title}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}/>
                ))
                }
            </TodoList>
            {!showModal && <CreateTodoButton showModal={showModal} setShowModal={setShowModal}/>}
        </div>
    );
};

export { AppUi };