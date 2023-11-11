import { useState } from "react"

export function NewTodoform(props) {
    props.onSubmit
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        if(newItem === "") return
        props.onSubmit(newItem)
        
        setNewItem("")
    }

    return(<>
    <h1 className="header">ToDo List Using React</h1>
    <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">New Task</label>
            <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
        </div>
        <button className="btn">Add</button>
    </form>
    </>) 
    
    
}