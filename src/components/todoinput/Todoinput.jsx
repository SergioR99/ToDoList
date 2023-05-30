import { useState } from "react"

const TodoInput = ({addTodo}) => {

    const [title, setTitle] = useState('')

    const handleTodo = (e) => {
        if (e.key.toLowerCase() === 'enter'){
            addTodo (title)
            setTitle('')
        }
    }

    return (
        <div className="mt-6 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="border border-gray-500 p-3 border-solid rounded-full"></span>
             </div>

             <input type="text" placeholder="Ingrese su tarea" value={title}  onChange={e => { setTitle(e.target.value);}} onKeyDown={e => handleTodo(e)}
             className="focus:shadow-lg font-roboto focus:shadow-green-700 pl-12 w-full py-4 rounded-xl outline-none transition-all duration-300 ease-in-out text-gray-600"/>
        </div>
    )
}

export {TodoInput}