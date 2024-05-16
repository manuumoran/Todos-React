import { TodoContext } from '../TodoContext';
import './TodoSearch.css';
import React from 'react';

function TodoSearch() {
    const {
        searchValue,
        setSearchValue,
        loading
    } = React.useContext(TodoContext)

    return (
        <input 
            placeholder={loading ? '' : 'Search for a TODO'}
            className={`TodoSearch ${loading && 'TodoSearch-loading'}`} 
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value)
            }}
        />
    );
}

export { TodoSearch };