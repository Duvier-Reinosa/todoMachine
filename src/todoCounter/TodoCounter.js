import React from "react";
import './TodoCounter.css'

const TodoCounter = ({completedTodos, totalTodos}) => {
    return (
        <div className="container">
            <h2 className="textCounter">Has completado {completedTodos} de {totalTodos} TODO´s</h2>
            <div className="barContainer"><div className="bar"></div></div>
        </div>
    )
}
export { TodoCounter };