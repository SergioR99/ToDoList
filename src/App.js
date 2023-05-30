import { useState } from "react";
import { Title } from "./components/title";
import { Todo } from "./components/todo";
import { TodoList } from "./components/todoList";
import { TodoInput } from "./components/todoinput";

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Aprender a conducir',
      complete: false,
    },
    {
      id: 2,
      title: 'Ver una serie',
      complete: false,
    },
    {
      id: 3,
      title: 'Jugar videojuegos',
      complete: false,
    },
    {
      id: 4,
      title: 'Dar comida a las mascotas',
      complete: false,
    },
  ])

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1 ].id : 1; 

    const newTodo = {
      id: lastId + 1,
      title,
      complete: false
    }

    const todoList = [...todos];
    todoList.push(newTodo);
    setTodos(todoList);
  }

  const handleSetComplete = (id) => {
    const updateList = todos.map(todo =>{
      if (todo.id === id ) {
        return {...todo, complete: !todo.complete}
      }
      return todo
    })

    setTodos(updateList)
  }

  const handleDelete = (id) => {
    const updateList = todos.filter(todo => todo.id !== id)
    setTodos(updateList) 
  }

  return (
    <div className="bg-gray-900 min-h-screen h-full font-roboto text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <TodoInput addTodo={addTodo}/>
        <TodoList 
          todos={todos}
          handleSetComplete={handleSetComplete}
          handleDelete={handleDelete}
          />
      </div> 
    </div>
  );
}

export default App;
