import { NavLink } from 'react-router-dom'

export default function Result () {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-center'><p>Bienvenido</p><p>Registrado con exito!!</p> </h1>
      <img src='./public/imgs/check.png' alt='success' width='192' />
      <NavLink
        className='text-center bg-[#00BF63] rounded-lg text-white'
        to='/login'
      >Ingresar
      </NavLink>
    </div>
  )
}
