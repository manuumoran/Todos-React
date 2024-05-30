import React, { useRef, useEffect } from 'react';
import './TodoForm.css'
import { TodoContext } from '../TodoContext';
import clsx from 'clsx';

function TodoForm() {   
    const {
        createTodo,
        setOpenModal,
        textToEdit,
        editTodo
    } = React.useContext(TodoContext)

    const [newTodoName, setNewTodoName] = React.useState('')
    const [newTodoNameToEdit, setNewTodoNameToEdit] = React.useState(textToEdit)
    const [error, setError] = React.useState(false)
    const [shake, setShake] = React.useState(false)
    const textareaRef = useRef(null);

    const onClick = (event) => {
        event.stopPropagation();
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (!newTodoName && !newTodoNameToEdit) {
            setError(true)
            setShake(true)
            setTimeout(() => setShake(false), 200)
        } else {
            if (textToEdit) {
                editTodo(newTodoNameToEdit)
                setOpenModal(false)             
            } else {
                createTodo(newTodoName)
                setOpenModal(false)             
            }
        }
    }

    const handleKeyDown = (event) => {
        if (event.keyCode === 13 && !event.shiftKey) {
            event.preventDefault(); // Prevent the default Enter key behavior (new line)
            onSubmit(event)
        }
    }

    useEffect(() => {
        textareaRef.current.focus();
        textareaRef.current.setSelectionRange(textareaRef.current.value.length, textareaRef.current.value.length);
    }, []);

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        !textToEdit ? setNewTodoName(event.target.value) : setNewTodoNameToEdit(event.target.value)
    }

    return (
        <div 
            onClick={onClick} 
            className='form-container'
        > 
            <form onSubmit={onSubmit}>
                <label>{!textToEdit ? 'Escribe tu nuevo TODO' : 'Edita tu TODO'}</label>
                <textarea 
                    className={clsx({
                        'textarea-error-shake': shake,
                        'textarea-error': error
                    })}
                    placeholder='Cortar cebolla para el almuerzo'
                    value={!textToEdit ? newTodoName : newTodoNameToEdit}
                    onChange={onChange}
                    ref={textareaRef}
                    autoFocus
                    onKeyDown={handleKeyDown}
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