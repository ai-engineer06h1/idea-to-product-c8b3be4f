import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <Link to="/tasks" className="text-xl font-bold p-4 bg-blue-500 text-white rounded-lg shadow-lg">
        Go to Task List
      </Link>
    </div>
  );
};

export default Landing;