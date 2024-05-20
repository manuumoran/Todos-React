import React from 'react';
import './TodoForm.css'
import { TodoContext } from '../TodoContext';

function TodoForm() {   
    const {
        createTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    const [newTodoName, setNewTodoName] = React.useState('')

    const onClick = (event) => {
        event.stopPropagation();
    }

    const onSubmit = () => {
        createTodo(newTodoName)
        setOpenModal(false)
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoName(event.target.value)
    }

    return (
        <div onClick={onClick}>
            <form onSubmit={onSubmit}>
                <label>Escribe tu nuevo TODO</label>
                <textarea 
                    placeholder='Cortar cebolla para el almuerzo'
                    value={newTodoName}
                    onChange={onChange}
                    required
                />
                <div className='TodoForm-buttonContainer'>
                    <button 
                        type='button'
                        className="TodoForm-button TodoForm-button--cancel" 
                        onClick={onCancel}
                    >   
                        Cancelar
                    </button>
                    <button
                        type='submit'
                        className='TodoForm-button TodoForm-button--add'
                    >
                        Añadir
                    </button>
                </div>
            </form>
        </div>
    );
}

export { TodoForm };