import React, {useContext, useState} from "react";
import { TodoContext } from "../todoContext";
import './TodoModal.css';
const TodoModal = () => {
    const {setShowModal} = useContext(TodoContext);
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');


    const closeModal = event => {
        if(event.target.id){
            setShowModal(false);
        }
    }

    const changeTitle = event => {
        setTitulo(event.target.value);
    };

    const changeDescrition = event => {
        setDescripcion(event.target.value)
    };

    const save = () => {
        let localTodos = localStorage.getItem('todos') || [];
        const newtodo = {
            title: titulo,
            text: descripcion
        }
        if(typeof localTodos === "string"){
            localTodos = JSON.parse(localTodos)
        }
        localTodos.push(newtodo);
        localStorage.setItem('todos',JSON.stringify(localTodos));
        setTitulo('');
        setDescripcion('');
        setShowModal(false);
    };

    return (
        <div className="modalContainer" id="backdrop" onClick={event => closeModal(event)}>
            <div className="modal">
                <h1>Agregar Todo</h1>
                <div className="flexContainer">
                    <input placeholder="Titulo" className="input" onChange={event => changeTitle(event)}/>
                    <input placeholder="Descripción" className="input" onChange={event => changeDescrition(event)}/>
                </div>
                <button className="button" onClick={()=>save()}>Guardar</button>

            </div>
        </div>
    )
};

export {TodoModal}