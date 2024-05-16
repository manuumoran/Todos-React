import { useLocalStorage } from './useLocalStorage';
import React from 'react';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', [])
    const [searchValue, setSearchValue] = React.useState('')
    // const [deshacer, setDeshacer] = React.useState(1)

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter(
    (todo) => {
        const todoText = todo.text.toLocaleLowerCase()
        const searchText = searchValue.toLocaleLowerCase()
        return todoText.includes(searchText)
    }
    )

    const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === text) 
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
    }
    
    const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === text)
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
    // deshacerTodos()
    }
    
    const createTodo = () => {
    const newTodo = []
    const newTodoText = prompt('Ingrese el nombre del nuevo TODO')
    if (newTodoText) {
        newTodo.push({text:newTodoText, completed: false})
        newTodo.push(...todos)
        saveTodos(newTodo)
    }
    }

    // const deshacerTodos = () => {
    //   const todosCopy = [...todos]
    
    //   while (deshacer !== 3) {
    //     let promptDeshacer = (prompt('Esta seguro que desea eliminar este TODO?\nPresione:\n1 Si desea eliminarlo\n2 Si desea conservarlo\n3 Para eliminarlo y que no aparezca mas este mensaje'))
        
    //     if(promptDeshacer == 1) {
    //       setDeshacer(1)
    //       break;
    //     } else if(promptDeshacer == 2) {
    //       setTodos(todosCopy)
    //       break;
    //     } else if(promptDeshacer == 3) {
    //       alert('Entendido no volveremos a mostrar este mensaje')
    //       setDeshacer(3)
    //       break;
    //     } else {
    //       setDeshacer(4)
    //     }
    //   }
    // }

    return (
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            createTodo,
            loading,
            error 
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };