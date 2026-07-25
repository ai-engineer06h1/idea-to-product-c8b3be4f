import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTask = ({ addNewTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addNewTask({ title: taskTitle, completed: false });
      navigate('/tasks');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Task</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="p-2 border border-gray-300 rounded-lg w-full mb-4" 
          placeholder="Task title"
          value={taskTitle} 
          onChange={(e) => setTaskTitle(e.target.value)} 
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
          Save Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;