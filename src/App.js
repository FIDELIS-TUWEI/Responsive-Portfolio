import React, { useState, useEffect } from 'react'

// Unique id for every task
let globalID = 0;

function App() {

    // State to add task
    const [task, setTask] = useState("");

    // State to handle items
    const [todos, setTodos] = useState([]);
    
    // Function to handle form submit & add items to <li>
    function createTodo(event) {
        event.preventDefault();
        
        setTodos(prevTodo => {
            setTask('')
            return [...prevTodo, { todo: task, id: globalID++ }]
        })
    }

    // Function to delete Task
    function deleteTaskItem(itemID) {
        setTodos(prevTodo => prevTodo.filter(item => item.id !== itemID))
    }

    return (
        <div>
            <h1>Track Your Daily Tasks</h1>

            <form onSubmit={createTodo}>
                <input
                    type='text'
                    placeholder='Add New Task Here...'
                    value={task}
                    onChange={event => {
                        setTask(event.target.value)
                    }}
                />

                <button type='submit'>Create Task</button>
            </form>

            <ul>
                {todos.map((item) => {
                    return <div key={item.id}>
                        <li>{item.todo}</li>
                        <button onClick={() => deleteTaskItem(item.id)}>Delete</button>
                    </div>
                })}
            </ul>
        </div>
    )
}

export default App;