import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import MainLayout from "./layouts/layout";
import Dashboard from "./layouts/dashboard";
import Booking from './pages/queue'
import Admin from './pages/admin/homepagead'
import QueueControlCard from './pages/admin/actionad'
import Login from './pages/login'
import Register  from './pages/register';
import './index.css'

// สร้าง router
const router = createBrowserRouter([
  {
    path: "/", // root path ใช้ Home ธรรมดา
    element: <App />
  },
  {
    path: "/login", // root path ใช้ Home ธรรมดา
    element: <Login />
  },
  {
    path: "/register", // root path ใช้ Home ธรรมดา
    element: <Register />
  },
  
  {
    path: "/",
    element: <MainLayout />,   // ใช้ Layout ที่นี่
    children: [
      { path: "booking", element: <Booking /> },
    ],
  },
  {
    path: "/",
    element: <Dashboard />,   // ใช้ Layout ที่นี่
    children: [
      { path: "admin", element: <Admin /> },
      { path: "admin/ActionAd", element: <QueueControlCard /> },
      
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)