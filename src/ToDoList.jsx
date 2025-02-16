//npm run deploy
import React, { useState } from 'react';
function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handlInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
        }
        setNewTask("");

    }

    function deleteTask(index) {
        const updateTasks = tasks.filter((_, i) => i !== index);
        setTasks(updateTasks);
    }


    return (
        <div className='to-do-list'>
            <h1>To-Do-List</h1>

            <div>
                <input type="text" placeholder='Enter a task...'
                    value={newTask} onChange={handlInputChange} maxLength={25} />
                <button className='add-button' onClick={addTask}>
                    +
                </button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className='delete-button' onClick={() => deleteTask(index)}>
                            ❌
                        </button>
                    </li>
                )}
            </ol>
        </div>

    );

}

export default ToDoList