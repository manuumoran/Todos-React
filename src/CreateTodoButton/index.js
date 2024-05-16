import './CreateTodoButton.css'
import React from 'react';
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
    const {
        createTodo
    } = React.useContext(TodoContext)

    return (
        <div 
            className='button' 
            onClick={() => {createTodo()}}
        >
            +   
        </div>
    );
}

export { CreateTodoButton };