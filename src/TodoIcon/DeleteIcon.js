import React from 'react';
import { TodoIcon } from './';

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