import React from 'react';
import Home from './components/Home';
import Navbar from './header/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><Home /></>
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
