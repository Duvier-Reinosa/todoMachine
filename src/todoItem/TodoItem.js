import React from "react";
import './TodoItem.css'

const TodoItem = (props) => {
    return(
        <li className="itemContainer" style={{background: props.completed === true ? '#FFBD00' : '#fff'}}>
            <span className="itemTitle">C</span>
            <p className="itemText">{props.text}</p>
            <div className="buttonsContainer">
                <button 
                    className="itemButton"
                    onClick={props.onDelete}
                >
                    x
                </button>
                <button 
                    className="itemButton"
                    onClick={props.onComplete}
                >
                    ✓
                </button>
            </div>
        </li>
    )
};

export { TodoItem };