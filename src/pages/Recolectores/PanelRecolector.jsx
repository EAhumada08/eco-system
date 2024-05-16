import { NavLink } from 'react-router-dom'

export default function PanelRecolector () {
  return (
    <div className=' h-svh w-svw flex items-center justify-center gap-x-10'>
      <NavLink to='/progamar_envio' className='flex'>Puntos de recoleccion</NavLink>
      <NavLink className='flex'>Pendientes por recolectar</NavLink>
    </div>

  )
}
