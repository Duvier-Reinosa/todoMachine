import React from "react";
import './TodoCounter.css'

const TodoCounter = () => {
    return (
        <div className="container">
            <h2 className="textCounter">Has completado 2 de 3 TODO´s</h2>
            <div className="barContainer"><div className="bar"></div></div>
        </div>
    )
}
export { TodoCounter };