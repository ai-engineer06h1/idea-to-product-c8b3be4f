import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/tasks')
            .then(response => setTasks(response.data))
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    const toggleCompletion = (id) => {
        axios.patch(`http://localhost:5000/api/tasks/${id}`)
            .then(response => {
                setTasks(tasks.map(task => (
                    task.id === id ? response.data : task
                )));
            })
            .catch(error => console.error('Error toggling task:', error));
    };

    const deleteTask = (id) => {
        axios.delete(`http://localhost:5000/api/tasks/${id}`)
            .then(() => {
                setTasks(tasks.filter(task => task.id !== id));
            })
            .catch(error => console.error('Error deleting task:', error));
    };

    return (
        <ul className="task-list">
            {tasks.map(task => (
                <li key={task.id}>
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        {task.title}
                    </span>
                    <button onClick={() => toggleCompletion(task.id)}>{task.completed ? 'Undo' : 'Complete'}</button>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
