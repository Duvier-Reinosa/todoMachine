import React, {useState} from "react";
import './TodoSearch.css'

const TodoSearch = () => {

    const [searchValue, setSearchValue] = useState('');

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