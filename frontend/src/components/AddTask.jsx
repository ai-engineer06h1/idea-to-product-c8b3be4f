import React, { useState } from 'react';
import axios from 'axios';

function AddTask() {
    const [title, setTitle] = useState('');

    const addTask = (event) => {
        event.preventDefault();
        if (!title) return;
        axios.post('http://localhost:5000/api/tasks', { title })
            .then(response => console.log('Task added:', response.data)) // Handle adding to state in real implementation
            .catch(error => console.error('Error adding task:', error));
        setTitle('');
    };

    return (
        <form onSubmit={addTask} className="add-task">
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Add new task"
                required
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTask;
