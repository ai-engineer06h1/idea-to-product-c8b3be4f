import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/tasks" element={<TaskList tasks={tasks} setTasks={setTasks} />} />
          <Route path="/add" element={<AddTask addNewTask={addNewTask} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;