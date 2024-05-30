import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import { EditIcon } from '../TodoIcon/EditIcon';
import './TodoItem.css';
import React from 'react';

function TodoItem({ text, completed, onComplete, onDelete, onEdit}) {
    return (
      <li className='TodoItem'>
        <CompleteIcon 
          onComplete={onComplete}
          text={text}
          completed={completed}
        />

        <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
          {text}
        </p>
        
        <EditIcon 
          onEdit={onEdit}
          text={text}
        />

        <DeleteIcon 
          onDelete={onDelete}
          text={text}
        />
      </li>
    );
}

export { TodoItem };