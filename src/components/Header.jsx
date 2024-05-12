import { NavLink } from 'react-router-dom'

export default function Header () {
  return (
    <header className=' bg-[#00BF63] h-fit p-2 flex shadow-lg shadow-cyan-500/50 '>
      <div className=' w-20'>
        <NavLink to='/'> <img src='../public/imgs/logoES.png' alt='' /> </NavLink>
      </div>
    </header>
  )
}
