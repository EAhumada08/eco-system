import TextField from '../components/TextField'
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { clientSchema } from '../validations/client'
import { registerClient } from '../services/clients'
import { useState } from 'react'

export default function NewClient () {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(clientSchema) })

  const [userRegistered, setUserRegistered] = useState(false)
  const [error, setError] = useState(false)
  // const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      const res = await registerClient(data)
      console.log(res)
      setUserRegistered(true)
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  return (
    <>
      <main className='h-lvh flex justify-center '>
        <div className=' static shadow-lg   h-fit w-fit mt-10 p-10'>
          {userRegistered && <h1>hola</h1>}
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  gap-8'>
            <h1 className=' text-3xl text-center font-bold text-[#00BF63]'>Crear nueva cuenta</h1>

            <TextField
              label='Nombre completo'
              name='name'
              type='text'
              register={register}
            />
            {errors.name && <span className='visible text-red-600 italic '>{errors.name?.message}</span>}
            <TextField
              label='Correo'
              name='email'
              type='email'
              register={register}
            />
            {error && <p className=' text-red-600'>Error</p>}
            {/* errors.email ? <span className='visible text-red-600 italic w-full'>{errors.email?.message}</span> : <span className='invisible text-red-600 italic w-full' /> */}
            <TextField
              label='Contraseña'
              name='password'
              type='password'
              register={register}
            />
            {errors.password ? <span className='visible text-red-600 italic'>{errors.password?.message}</span> : <span />}
            <TextField
              label='Telefono'
              name='tel'
              type='tel'
              pattern='[0-9]{10}'
              register={register}
            />
            {errors.tel ? <span className=' text-red-600 italic'>{errors.tel?.message}</span> : <span />}
            <button
              type='submit'
              className=' bg-[#00BF63] rounded-md'
            >Crear
            </button>
            <NavLink
              to='/login'
            >Ingresar
            </NavLink>
          </form>

        </div>
      </main>
    </>
  )
}
