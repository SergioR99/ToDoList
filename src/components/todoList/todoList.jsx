import { Todo } from "../todo/todo"
import { TodoFilters } from "../todoFilters/todoFilterts"

const TodoList = ( {todos, handleSetComplete, handleDelete} ) => {
    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {todos.map(todo => {
                return (
                    <Todo 
                        key={todo.id} 
                        todo={todo} 
                        handleDelete={handleDelete} 
                        handleSetComplete={handleSetComplete}/>
                )
            })}
            <TodoFilters />
        </div>
    )
}

export {TodoList}