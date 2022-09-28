import React from "react";
import './CreateTodoButton.css'

const CreateTodoButton = ({setShowModal}) => {

    const onClickButton = () => {
        setShowModal(true);
    }
    return(
        <button 
            className="plusButton"
            onClick={onClickButton}
        >+</button>
    )
};

export { CreateTodoButton };