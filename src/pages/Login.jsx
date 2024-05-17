import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, NavLink } from 'react-router-dom'
import { TextField } from '../components/TextField'
import { validateAccount } from '../services/clients'

export default function Login () {
  const {
    register,
    handleSubmit
  } = useForm()

  const navigate = useNavigate()

  const [user, setUser] = useState('cliente')
  const [error, setError] = useState(false)

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const res = await validateAccount(data)
      console.log(res)
      window.localStorage.setItem('idUser', JSON.stringify(res.client.id))
      if (user !== res.client.rol) {
        console.log(user, res.client.rol)
        setError(true)
      } else {
        if (user === 'cliente') navigate('/dashboard')
        if (user === 'recolector') navigate('/panel')
      }
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  const handleClick = (e) => {
    const { name } = e.target
    setUser(name)
  }
  console.log(user)
  return (

    <>

      <div className=' h-svh w-dvw justify-center items-center flex'>
        <div className='flex   smartphone:flex-col lg:flex-row md:flex-row gap-x-1 shadow-lg'>
          <div className='  w-[600px] bg-[#00BF63] rounded-lg items-center justify-center flex'>
            <img className='scale-100' src='../public/imgs/EcoSystem.png' alt='ssd' />
          </div>
          <div className=' p-4 flex flex-col  items-center'>
            <h1 className=' text-center font-bold text-2xl mb-3'>Bienvenido(a)</h1>

            <div className=' gap-x-3 flex flex-row justify-center items-center'>
              <button
                className='bg-[#00BF63] text-white hover:bg-[#9a9999]  rounded-tr-[20px] rounded-bl-[20px] font-bold p-2'
                name='cliente' onClick={handleClick}
              >Cliente
              </button>

              <button
                className='bg-[#00BF63] text-white hover:bg-[#9a9999]  rounded-tr-[20px] rounded-bl-[20px] font-bold p-2'
                name='recolector' onClick={handleClick}
              >Recolector
              </button>

              <button
                className='bg-[#00BF63] text-white hover:bg-[#9a9999]  rounded-tr-[20px] rounded-bl-[20px] font-bold p-2'
                name='admin' onClick={handleClick}
              >Administrador
              </button>
            </div>

            <form
              className='  px-4 py-4 h-fit w-fit flex flex-col gap-y-6 items-center'
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className=' w-72 flex flex-col gap-y-5'>
                <TextField
                  label='Correo'
                  name='user'
                  type='email'
                  register={register}
                  error={error}
                />

                <TextField
                  label='Contraseña'
                  name='pass'
                  type='password'
                  register={register}
                  error={error}
                />
                <NavLink
                  to='/recoverpassword'
                  className=' text-right'
                >Olvidaste tu contraseña?
                </NavLink>
              </div>

              <h1 className={error ? 'visible text-red-600' : 'invisible'}>Datos incorrecctos</h1>

              <button
                className='  h-8 w-20 border rounded-md border-black font-bold bg-[#00BF63] hover:bg-green-400'
                type='submit' onClick={handleSubmit}
              >Entrar
              </button>

              {user === 'cliente' && <NavLink to='/nuevoCliente' className='hover:text-green-600 font-bold'>No tienes cuenta? Registrate</NavLink>}
              {user === 'recolector' && <NavLink to='/nuevo_recolector' className='hover:text-green-600 font-bold'>No estas registrado como recolector? Registrate</NavLink>}

            </form>
          </div>
        </div>
      </div>
    </>
  )
}
