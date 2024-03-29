import './App.css';
import React, {useContext} from "react";
import { CreateTodoButton } from "./createTodoButton/CreateTodoButton";
import { TodoCounter } from "./todoCounter/TodoCounter";
import { TodoItem } from "./todoItem/TodoItem";
import { TodoList } from "./todoList/TodoList";
import { TodoSearch } from "./todoSearch/TodoSearch";
import { TodoModal } from './todoModal/TodoModal';
import { TodoContext } from './todoContext';

const AppUi = () => {
    const {showModal, loading, searchedTodos, completeTodo, deleteTodo, setShowModal} = useContext(TodoContext);
    return (
            <div className='appContainer'>
                { showModal && <TodoModal  />}
                <TodoCounter />
                <TodoSearch />
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
                {!showModal && <CreateTodoButton/>}
            </div>
    );
};

export { AppUi };