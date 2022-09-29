import React, { useContext } from "react";
import { TodoContext } from "../todoContext";
import './CreateTodoButton.css'

const CreateTodoButton = () => {
    const {setShowModal} = useContext(TodoContext);

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