import React from "react";
import './TodoItem.css'

const TodoItem = (props) => {
    return(
        <li className="itemContainer" style={{background: '#FFBD00'}}>
            <span className="itemTitle">C</span>
            <p className="itemText">{props.text}</p>
            <div className="buttonsContainer">
                <button className="itemButton">x</button>
                <button className="itemButton">✓</button>
            </div>
        </li>
    )
};

export { TodoItem };