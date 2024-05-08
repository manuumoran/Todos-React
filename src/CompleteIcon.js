import React from 'react';
import { TodoIcon } from './TodoIcon/TodoIcon';

function CompleteIcon({ onComplete, text, completed }) {
    return (
        <TodoIcon
            type="check"
            color="gray"
            onClick={onComplete}
            text={text} 
            completed={completed}
        />
    );
}

export { CompleteIcon };