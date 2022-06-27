import React from "react";
import './CreateTodoButton.css'

const CreateTodoButton = () => {

    const onClickButton = () => {
        alert('hola')
    }
    return(
        <button 
            className="plusButton"
            onClick={onClickButton}
        >+</button>
    )
};

export { CreateTodoButton };