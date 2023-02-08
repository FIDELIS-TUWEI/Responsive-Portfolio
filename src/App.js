import React, { useState, useEffect } from 'react'

function App() {
    
    function createTodo(event) {
        event.preventDefault();
    }
    return (
        <div>
            <h1>Track Your Daily Tasks</h1>

            <form onSubmit={createTodo}>
                <input
                    type='text'
                    placeholder='Add New Task Here...'
                />

                <button type='submit'>Create Task</button>
            </form>
        </div>
    )
}

export default App;