import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { TodoContext } from '../TodoContext';

function Modal({ children }) {
    const {
        setOpenModal
    } = React.useContext(TodoContext)

    return ReactDOM.createPortal(
        <div 
            className='ModalBackground'
            onClick={() => setOpenModal(false)}
        >
            {children} 
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };