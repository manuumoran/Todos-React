import './CreateTodoButton.css'

function CreateTodoButton({ onCreate }) {
    return (
        <div 
            className='button' 
            onClick={() => {onCreate()}}
        >
            +   
        </div>
    );
}

export { CreateTodoButton };