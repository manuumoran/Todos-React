import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG} from './delete.svg';
import { ReactComponent as EditSVG} from './edit.svg';
import './TodoIcon.css';
import React from 'react';

const iconTypes = {
    'check': (color) => <CheckSVG className='Icon-svg' fill={color} />,
    'delete': (color) =>  <DeleteSVG className='Icon-svg' fill={color} />,
    'edit': (color) =>  <EditSVG className='Icon-svg-edit' fill={color} />
};

function TodoIcon({ type, completed, onClick, text, color}) {
    return (
        <span
            className={`Icon-container Icon-container-${type} ${completed && 'Icon-container-check--active'}`}
            onClick={() => onClick(text)}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };