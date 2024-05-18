import React from 'react';
import './TodoForm.css'
import { TodoContext } from '../TodoContext';

function TodoForm() {   
    const {
        newTodoName,
        setNewTodoName,
        createTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    return (
        <div className='form-container'>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                className='new-todo-input' 
                placeholder='Cortar cebolla para el almuerzo'
                value={newTodoName}
                onChange={(event) => {
                    setNewTodoName(event.target.value)
                }}
            />
            <div className='TodoForm-buttonContainer'>
                <button 
                    className="TodoForm-button TodoForm-button--cancel" 
                    onClick={() => {
                        setOpenModal(state => !state)
                        setNewTodoName('') 
                    }}>   
                    Cancelar
                </button>
                <button 
                    className="TodoForm-button TodoForm-button--add" 
                    onClick={() => {createTodo()}}>
                    Añadir
                </button>
            </div>
        </div>
    );
}

export { TodoForm };