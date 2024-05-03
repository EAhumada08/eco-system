import axios from 'axios'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function NewClient () {
  const [data, setData] = useState({ name: '', email: '', password: '', tel: '' })

  const navigate = useNavigate()
  const handleChange = ({ target }) => {
    const { name, value } = target
    setData({ ...data, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
    axios.post('http://localhost:1234/clients', data)
      .then(res => {
        console.log(res.data)
        navigate('/login')
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <header className=' p-5 bg-green-500  flex'>
        <NavLink to='/login' className='border-2 border-black p-2 rounded-md '>Ingresar</NavLink>
      </header>
      <main className='h-lvh flex justify-center '>
        <form onSubmit={handleSubmit} className=' shadow-lg flex flex-col gap-8 mt-20  h-fit w-fit p-20' action=''>
          <h1 className=' text-3xl font-bold text-[#00BF63]'>Crear nueva cuenta</h1>
          <label>
            <span className='block'>Nombre completo</span>
            <input
              className='border-b-2 border-black p-2 w-full focus:outline-none' type='text' name='name' id=''
              value={data.name} onChange={handleChange} required
            />
          </label>

          <label>
            <span className='block'>Email</span>
            <input
              className='border-b-2 border-black p-2 w-full focus:outline-none' type='text' name='email' id='' placeholder='email@gmail.com'
              value={data.email} onChange={handleChange} required
            />
          </label>
          <label>
            <span className='block'>Contrasena</span>
            <input
              className='border-b-2 border-black p-2 w-full focus:outline-none' type='password' name='password' id='' placeholder=''
              value={data.password} onChange={handleChange} required
            />
          </label>
          <label>
            <span className='block'>Telefono</span>
            <input
              className='border-b-2 border-black p-2 w-full focus:outline-none' type='tel' name='tel' id='' placeholder=''
              value={data.tel} onChange={handleChange} required
            />
          </label>

          <button type='submit' className=' bg-[#00BF63] rounded-md'>Crear</button>
        </form>
      </main>
    </>
  )
}
