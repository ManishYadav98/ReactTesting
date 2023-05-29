import React from 'react'

function Todo({todo}) {
    const {id,title,status}=todo;
    const h1=<h1>{title}</h1>
    const text=status?<strive>{h1}</strive>:h1
    return (
        <div data-testid={`todo-${id}`} >
        {text}
        </div>
    )
}

export default Todo
