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
import NuevoRecolector from './pages/Recolectores/NuevoRecolector'
import ProgramarEnvio from './pages/Recolectores/ProgramarEnvio'
import RecoverPassword from './pages/RecoverPassword/RecoverPassword'

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
    path: '/recoverpassword',
    element: <RecoverPassword />
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
    path: '/nuevo_recolector',
    element: <NuevoRecolector />
  },
  {
    path: '/panel',
    element: <PanelRecolector />
  },
  {
    path: '/progamar_envio',
    element: <ProgramarEnvio />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
