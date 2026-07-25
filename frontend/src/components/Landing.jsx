import React from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';

function Landing() {
    return (
        <div className="landing">
            <h1>Task Management Application</h1>
            <AddTask />
            <TaskList />
        </div>
    );
}

export default Landing;
