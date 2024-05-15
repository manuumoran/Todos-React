import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import React from 'react';

function TodoCounter() {
    const {
        totalTodos,
        completedTodos,
        loading
    } = React.useContext(TodoContext)

    if(!loading) {
        if (completedTodos < totalTodos) {
            return (
                <h1 className='TodoCounter'>
                    Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
                </h1>
            );
        } else if (totalTodos === 0) {
            return(
                <h1 className='TodoCounter'>
                    Crea tu primer TODO!
                </h1>
            );
        } else {
            return (
                <h1 className='TodoCounter'>
                    Felicitaciones! Has completado todos tus TODOS
                </h1>
            );
        }
    } else {
        return (
            <h1 className='TodoCounter'>
                Cargando...
            </h1>
        );
    }
}

export { TodoCounter };
