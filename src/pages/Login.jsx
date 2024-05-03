import { useState } from 'react'
import axios from 'axios'
import { useNavigate, NavLink } from 'react-router-dom'

export default function Login () {
  const [data, setData] = useState({ username: '', password: '' })
  const [a, setA] = useState(true)

  const handleChange = ({ target }) => {
    const { name, value } = target
    setData({ ...data, [name]: value })
  }

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.get(`http://localhost:1234/clients/?user=${data.username}&&pass=${data.password}`)
      .then(res => {
        const clients = res.data
        console.log(clients)
        navigate('/Dashboard')
      })
      .catch(({ res }) => {
        console.log(res)
        setA(false)
      })
  }
  return (

    <>

      <div className=' h-svh w-dvw justify-center items-center flex'>
        <div className='flex  p-3 smartphone:flex-col lg:flex-row md:flex-row gap-x-1 shadow-lg'>
          <div className='  w-[600px] bg-[#00BF63] rounded-lg items-center justify-center flex'><img className='scale-100' src='../public/EcoSystem.png' alt='ssd' /></div>
          <form onSubmit={handleSubmit} className='  px-8 py-4 h-fit w-fit flex flex-col gap-y-6 items-center'>

            <h1 className=' text-center font-bold text-2xl'>Bienvenido(a)</h1>
            <div className=' gap-x-3 flex flex-row'>
              <button className='bg-[#00BF63] text-white hover:bg-[#9a9999] rounded-tr-[20px] rounded-bl-[20px] font-bold p-2'>Cliente</button>
              <button className='bg-[#00BF63] text-white hover:bg-[#9a9999] rounded-tr-[20px] rounded-bl-[20px] font-bold p-2'>Recolector</button>
              <button className='bg-[#00BF63] text-white hover:bg-[#9a9999] rounded-tr-[20px] rounded-bl-[20px] font-bold p-2'>Administrador</button>
            </div>
            {a
              ? (
                <><input
                  className=' border-b-2 border-black p-1 w-full' type='text' name='username' id='i-u_n' placeholder='ea08'
                  value={data.username} onChange={handleChange}
                  />
                  <input
                    className='border-2 border-black p-1 w-full' type='password' name='password' id='i-p' placeholder='password'
                    value={data.password} onChange={handleChange}
                  />
                  <h1 className=' invisible'>Datos incorrecctos</h1>
                </>)
              : (
                <><input
                  className=' border-2 border-red-600 p-1  w-full' type='text' name='username' id='i-u_n' placeholder='ea08'
                  value={data.username} onChange={handleChange}
                  />
                  <input
                    className=' border-2 border-red-600 p-1  w-full' type='password' name='password' id='i-p' placeholder='password'
                    value={data.password} onChange={handleChange}
                  />
                  <h1 className=' visible text-center text-red-600'>Datos incorrecctos</h1>
                </>)}

            <button
              className=' h-8 w-20 border rounded-md border-black font-bold bg-[#00BF63] hover:bg-green-400'
              type='submit'
            >Entrar
            </button>

            <NavLink to='/nuevoCliente' className='hover:text-green-600 font-bold'>No tienes cuenta? Registrate</NavLink>

          </form>
        </div>
      </div>
    </>
  )
}
