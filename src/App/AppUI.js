import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { TodoForm } from '../TodoForm';
import React from 'react'
import { Modal } from '../Modal';

function AppUI() {
  const {
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
    openModal,
    triggerEditTodo
  } = React.useContext(TodoContext)

  return (
    <>
      <TodoCounter />
      <TodoSearch />

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
            onEdit={triggerEditTodo}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };