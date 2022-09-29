import React, { useContext } from "react";
import { TodoContext } from "../todoContext";
import './TodoSearch.css'

const TodoSearch = () => {
    const { searchValue, setSearchValue } = useContext(TodoContext);

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    };

    return(
        <input 
            className="searchInput"
            placeholder="Buscar" 
            value={searchValue}
            onChange={onSearchValueChange}/>
    );
};

export { TodoSearch }