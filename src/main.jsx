import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import Navbar from './Header/Navbar.jsx';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './Components/Home.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<><Navbar/><Home data='Features'/></>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router}/>
  </StrictMode>,
)
