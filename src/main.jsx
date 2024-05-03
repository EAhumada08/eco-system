import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import NewClient from './pages/NewClient'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />

  },
  {
    path: '/Dashboard',
    element: <Dashboard />
  },
  {
    path: '/nuevoCliente',
    element: <NewClient />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
