import React from 'react';
import { TodoIcon } from './';

function EditIcon({ onEdit, text }) {
    return (
        <TodoIcon
            type="edit"
            color="gray" 
            onClick={onEdit}
            text={text}
        />
    );
}

export { EditIcon };