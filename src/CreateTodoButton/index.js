import './CreateTodoButton.css'
import React from 'react';
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
    const {
        openModal,
        setOpenModal,
        loading
    } = React.useContext(TodoContext)

    const onClick = () => {
        !loading && setOpenModal(state => !state)
    }

    return (
        <div 
            className={`button ${openModal && 'button-close'}`} 
            onClick={onClick}
        >
            +   
        </div>
    );
}

export { CreateTodoButton };