import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import NewClient from './pages/NewClient'
import App from './App'
import AddWaste from './pages/AddWaste'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <Login />

  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard/addWaste',
        element: <AddWaste />
      }
    ]
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
