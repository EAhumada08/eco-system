import axios from 'axios'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export default function NewClient () {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const navigate = useNavigate()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <header className=' p-5 bg-green-500  flex'>
        <NavLink to='/login' className='border-2 border-black p-2 rounded-md '>Ingresar</NavLink>
      </header>
      <main className='h-lvh flex justify-center '>
        <form onSubmit={handleSubmit(onSubmit)} className=' shadow-lg flex flex-col gap-8 mt-20  h-fit w-fit p-20'>
          <h1 className=' text-3xl font-bold text-[#00BF63]'>Crear nueva cuenta</h1>
          <label>
            <span className='block'>Nombre completo</span>
            <input
              {...register('example')}
              className='border-b-2 border-black p-2 w-full focus:outline-none' type='text'
            />
          </label>

          <label>
            <span className='block'>Email</span>
            <input
              {...register('exampleRequired', { required: true })}
              className='border-b-2 border-black p-2 w-full focus:outline-none' type='text' name='email' id='' placeholder='email@gmail.com'
            /> {errors.exampleRequired && <span className=' text-red-600 italic'>Th</span>}
          </label>
          <label>
            <span className='block'>Contrasena</span>
            <input
              className='border-b-2 border-black p-2 w-full focus:outline-none' type='password' name='password'
            /><span className=' text-red-600 italic' />
          </label>
          <label>
            <span className='block'>Telefono</span>
            <input
              className='border-b-2 border-black p-2 w-full focus:outline-none' type='tel' name='tel'
            /><span className=' text-red-600 italic' />
          </label>

          <button type='submit' className=' bg-[#00BF63] rounded-md'>Crear</button>
        </form>
      </main>
    </>
  )
}
