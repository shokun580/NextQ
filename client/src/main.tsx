import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import MainLayout from "./layouts/layout";
import Dashboard from "./layouts/dashboard";
import About from './pages/About'
import Contact from './pages/Contact'
import Admin from './pages/admin/homepagead'
import QueueControlCard from './pages/admin/actionad'
import './index.css'

// สร้าง router
const router = createBrowserRouter([
  {
    path: "/", // root path ใช้ Home ธรรมดา
    element: <App />
  },
  {
    path: "/",
    element: <MainLayout />,   // ใช้ Layout ที่นี่
    children: [
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },{
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