const Todo = ({todo, handleSetComplete, handleDelete}) => {

    const { id, title, complete } = todo

    return (
        <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-500 w-full">
            <div className="flex items-center ">
                {

                     complete ? (
                        <div onClick={() => handleSetComplete(id)} className="bg-green-700 rounded-full p-1 cursor-pointer">
                            <img src="/check-icon.svg" className="h-4 w-4" alt="" />
                        </div>
                    ) : (
                        <span onClick={() => handleSetComplete(id)} className="border-solid border border-gray-500 rounded-full p-3 cursor-pointer"></span>
                    )

                }

                <p className={"pl-3 " + (complete && 'line-through')}>{title}</p>
            </div>
            <img onClick={() => handleDelete(id)} src="/close-icon.svg" alt="" className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in" />
        </div>
    )
}

export {Todo}