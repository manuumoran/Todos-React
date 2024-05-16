import './TodoList.css';
import React from 'react';

function TodoList({ children }) {
    return (
        <ul className='TodoList'>
            {children}
        </ul>
    );
}

export { TodoList };