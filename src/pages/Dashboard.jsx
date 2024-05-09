<<<<<<< HEAD


export default function Dashboard () {
  return (
    <div > 
      <header>Ecosystem</header>
      <main>
        Nuevo
=======
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Nav from '../components/Nav'
export default function Dashboard () {
  return (
    <div className=''>
      <Header />
      <main className='h-lvh bg-green-200 flex flex-row'>
        <Nav />
        <section className='bg-white m-10 w-full'>
          <Outlet />
          {/* <button>Nuevo desecho</button> */}
        </section>
>>>>>>> d8fa47e02427f8875790c38cb300cece45e463c2
      </main>
    </div>
  )
}
