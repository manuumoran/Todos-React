import { CompleteIcon } from '../CompleteIcon';
import { DeleteIcon } from '../DeleteIcon';
import './TodoItem.css';

function TodoItem({ text, completed, onComplete, onDelete }) {
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
        
        <DeleteIcon 
          onDelete={onDelete}
          text={text}
        />
      </li>
    );
}

export { TodoItem };