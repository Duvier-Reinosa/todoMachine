import React from "react";
import './CreateTodoButton.css'

const CreateTodoButton = () => {
    return(
        <button 
            className="plusButton"
            onClick={() => console.log('click')}
            >+</button>
    )
};

export { CreateTodoButton };