import './CreateTodoButton.css'
import React from 'react';
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
    const {
        // createTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    return (
        <div 
            className='button' 
            onClick={() => {setOpenModal(state => !state)}}
        >
            +   
        </div>
    );
}

export { CreateTodoButton };