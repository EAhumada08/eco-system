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
      </main>
    </div>
  )
}
