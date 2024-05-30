import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { TodoContext } from '../TodoContext';

function Modal({ children }) {
    const {
        setOpenModal,
        setTextToEdit
    } = React.useContext(TodoContext)

    const onClick = () => {
        setOpenModal(false)
        setTextToEdit('')
    }

    return ReactDOM.createPortal(
        <div 
            className='ModalBackground'
            onClick={onClick}
        >
            {children} 
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };