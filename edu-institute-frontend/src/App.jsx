// App.jsx
import React from 'react';
import Navbar from './components/navbar.jsx';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
};

export default App;
