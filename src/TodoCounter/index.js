import './TodoCounter.css';

function TodoCounter({ total, completed, loading}) {
    if(!loading) {
        if (completed < total) {
            return (
                <h1 className='TodoCounter'>
                    Has completado <span>{completed}</span> de <span>{total}</span> TODOs
                </h1>
            );
        } else if (total == 0) {
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
