import { useState } from 'react'
import axios from 'axios'
import { useNavigate, NavLink } from 'react-router-dom'

export default function Login () {
  const navigate = useNavigate()
  const [data, setData] = useState({ username: '', password: '' })
  const [user, setUser] = useState('clients')
  const [error, setError] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    const { name } = e.target
    setUser({ name })
    console.log(name)
  }

  const handleChange = ({ target }) => {
    const { name, value } = target
    setData({ ...data, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.get(`http://localhost:1234/${user}/?user=${data.username}&&pass=${data.password}`)
      .then(res => {
        const clients = res.data
        console.log(clients)
        navigate('/Dashboard')
      })
      .catch(({ res }) => {
        console.log(res)
        setError(true)
      })
  }
  return (

    <>

      <div className=' h-svh w-dvw justify-center items-center flex'>
        <div className='flex  p-3 smartphone:flex-col lg:flex-row md:flex-row gap-x-1 shadow-lg'>
          <div className='  w-[600px] bg-[#00BF63] rounded-lg items-center justify-center flex'>
            <img className='scale-100' src='../public/imgs/EcoSystem.png' alt='ssd' />
          </div>

          <form className='  px-8 py-4 h-fit w-fit flex flex-col gap-y-6 items-center'>
            <h1 className=' text-center font-bold text-2xl'>Bienvenido(a)</h1>

            <div className=' gap-x-3 flex flex-row'>
              <button
                className='bg-[#00BF63] text-white hover:bg-[#9a9999]  rounded-tr-[20px] rounded-bl-[20px] font-bold p-2'
                name='clients' onClick={handleClick}
              >Cliente
              </button>

              <button
                className='bg-[#00BF63] text-white hover:bg-[#9a9999]  rounded-tr-[20px] rounded-bl-[20px] font-bold p-2'
                name='recolectors' onClick={handleClick}
              >Recolector
              </button>

              <button
                className='bg-[#00BF63] text-white hover:bg-[#9a9999]  rounded-tr-[20px] rounded-bl-[20px] font-bold p-2'
                name='admins' onClick={handleClick}
              >Administrador
              </button>
            </div>
            <>
              <label className='w-full'> <span>Correo</span>
                <input
                  className={error
                    ? ' border-2 border-red-600 p-1 w-full'
                    : ' border-2 border-black p-1 w-full'}
                  type='text' name='username' id='i-u_n'
                  value={data.username} onChange={handleChange}
                />
              </label>
              <label className='w-full'> <span>Contraseña</span>
                <input
                  className={error
                    ? 'border-2 border-red-600 p-1 w-full'
                    : 'border-2 border-black p-1 w-full'}
                  type='password' name='password' id='i-p'
                  value={data.password} onChange={handleChange}
                />
              </label>
              <h1 className={error ? 'visible text-red-600' : 'invisible'}>Datos incorrecctos</h1>
            </>

            <button
              className=' transition ease-in-out h-8 w-20 border rounded-md border-black font-bold bg-[#00BF63] hover:bg-green-400'
              type='submit' onClick={handleSubmit}
            >Entrar
            </button>

            <NavLink to='/nuevoCliente' className='hover:text-green-600 font-bold'>No tienes cuenta? Registrate</NavLink>

          </form>
        </div>
      </div>
    </>
  )
}
