import React,{useState} from 'react'

export const TodoFrom = ({addTodo}) => {
    const [value,setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value)
        setValue("")
    }
    return (
            <form className='TodoFrom' onSubmit={handleSubmit}>
                <input type='text' className='todo-input' value={value} placeholder='Introdu Text' onChange={(e)=>setValue(e.target.value)} />
                <button type='submit' className='todo-btn'> Add </button>
            </form>
    )
}