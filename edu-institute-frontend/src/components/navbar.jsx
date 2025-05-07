import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-200 px-6 py-4 shadow-md flex items-center justify-between">
      <h1 className="text-xl font-bold text-gray-800">Dekma Educational Institute</h1>
      <div>
        <Link to="/register" className="text-blue-600 hover:underline mr-4">
          Register
        </Link>
        <Link to="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
