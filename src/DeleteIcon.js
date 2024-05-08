import React from 'react';
import { TodoIcon } from './TodoIcon/TodoIcon';

function DeleteIcon({ onDelete, text }) {
    return (
        <TodoIcon
            type="delete"
            color="gray" 
            onClick={onDelete}
            text={text}
        />
    );
}

export { DeleteIcon };