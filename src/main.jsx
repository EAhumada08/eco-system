import ReactDOM from 'react-dom/client'
import '../src/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import NewClient from './pages/NewClient'
import App from './App'
import AddWaste from './pages/AddWaste'
import ClientProfile from './pages/ClientProfile'
import Waste from './pages/clients/Waste'
import PanelRecolector from './pages/Recolectores/PanelRecolector'

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
      },
      {
        path: '/dashboard/client_profile',
        element: <ClientProfile />
      },
      {
        path: '/dashboard/waste',
        element: <Waste />
      }
    ]
  },
  {
    path: '/nuevoCliente',
    element: <NewClient />
  },
  {
    path: '/panel',
    element: <PanelRecolector />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
