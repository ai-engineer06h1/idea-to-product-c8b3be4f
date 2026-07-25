import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <Link to="/add" className="mb-4 inline-block bg-green-500 text-white p-2 rounded-lg">
        Add Task
      </Link>
      <ul className="list-disc pl-5">
        {tasks.length === 0 ? (
          <li>No tasks available</li>
        ) : (
          tasks.map((task, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span className={(task.completed ? 'line-through' : '') + ' flex-1'}>{task.title}</span>
              <button 
                className="mx-2 p-1 bg-gray-200 rounded-full"
                onClick={() => toggleComplete(index)}
              >
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button 
                className="p-1 bg-red-500 text-white rounded-lg"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskList;