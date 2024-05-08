import './TodoSearch.css';
import React from 'react';

function TodoSearch({ searchValue, setSearchValue }) {
    return (
        <input 
            placeholder="Search for a TODO"
            className='TodoSearch'
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value)
            }}
        />
    );
}

export { TodoSearch };