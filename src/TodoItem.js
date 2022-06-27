import React from "react";
import './TodoItem.css'

const TodoItem = (props) => {

    const onComplete = () => {
        alert('ya completaste el todo');
    };

    const onDelete = () => {
        alert('ya eliminaste el todo');
    };

    return(
        <li className="itemContainer" style={{background: '#FFBD00'}}>
            <span className="itemTitle">C</span>
            <p className="itemText">{props.text}</p>
            <div className="buttonsContainer">
                <button 
                    className="itemButton"
                    onClick={onDelete}
                >
                    x
                </button>
                <button 
                    className="itemButton"
                    onClick={onComplete}
                >
                    ✓
                </button>
            </div>
        </li>
    )
};

export { TodoItem };