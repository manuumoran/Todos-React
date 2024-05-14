import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({ completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo, createTodo, loading, error }) {
    return (
        <>
          <TodoCounter 
            completed={completedTodos}
            total={totalTodos} 
            loading={loading}
          />
          <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            loading={loading}
          />
    
          <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {error && <TodosError />}

            {searchedTodos.map(todo => (
              <TodoItem 
                key={todo.text}
                text={todo.text} 
                completed={todo.completed}
                onComplete={completeTodo}
                onDelete={deleteTodo}
              />
            ))}
          </TodoList>
          
          <CreateTodoButton
            onCreate={createTodo}
          />
        </>
      );
}

export { AppUI };