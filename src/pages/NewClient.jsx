import '../estilos/login.css'
import { TextField } from '../components/TextField'
import Result from '../components/Result'
import { NavLink } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { clientSchema } from '../validations/client'
import { registerClient } from '../services/clients'
import { useState } from 'react'
import { ConfigProvider, Radio, Select } from 'antd'
import { states } from '../const/states'

export default function NewClient () {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(clientSchema), defaultValues: { state: 'Aguascalientes' }

  }
  )

  const [userRegistered, setUserRegistered] = useState(false)
  const [error, setError] = useState(false)
  // const navigate = useNavigate()

  const state = watch('state')
  console.log(state)

  const result = states.find((name) => name.nombre === state)
  const { ciudades } = result
  console.log(ciudades)

  const onSubmit = async (data) => {
    console.log(data)
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
      <center>
        <main>
          <div className='divfondocrearcuenta'>
            {userRegistered
              ? <Result />
              : <form onSubmit={handleSubmit(onSubmit)}>
                <center>
                  <div className='titulo'>
                    <label htmlFor='crear'>Crear cuenta</label>
                  </div>
                </center><br /><br />
                <div className='contenedorizq'>
                  <div className='contenedordatosizq'>
                    <TextField
                      label='Nombre'
                      name='name'
                      type='text'
                      register={register}
                      className='textfield'
                    />
                    {errors.name && <span>{errors.name?.message}</span>}
                    <TextField
                      label='Correo'
                      name='email'
                      type='email'
                      register={register}
                    />
                    {error && <p>Error</p>}
                    {/* errors.email ? <span className='visible text-red-600 italic w-full'>{errors.email?.message}</span> : <span className='invisible text-red-600 italic w-full' /> */}

                    {errors.estado ? <span>{errors.estado?.message}</span> : <span />}

                    <div className='mt-6 mb-6'>
                      <h1>Estado</h1>
                      <Controller
                        name='state'
                        control={control}
                        render={({ field }) =>
                          <Select
                            defaultValue='Aguascalientes'
                            className='w-40'
                            {...field}
                            options={states.map((state) => {
                              return (
                                {
                                  value: state.nombre,
                                  label: state.nombre
                                }
                              )
                            })}
                          />}
                      />
                    </div>

                    {errors.estado ? <span>{errors.estado?.message}</span> : <span />}
                    <TextField
                      label='Código postal'
                      name='cp'
                      type='text'
                      register={register}
                    />
                    {errors.cp ? <span>{errors.cp?.message}</span> : <span />}
                    <div className='divdatosder2'>
                      <div>
                        <TextField
                          label='Número interior'
                          name='numi'
                          type='int'
                          register={register}
                        />
                        {errors.numi ? <span>{errors.numi?.message}</span> : <span />}
                      </div>
                      <div>
                        <TextField
                          label='Número exterior'
                          name='numex'
                          type='int'
                          register={register}
                        />
                        {errors.numex ? <span>{errors.numex?.message}</span> : <span />}
                      </div>

                    </div>
                  </div>
                </div>
                <div className='contenedorder'>
                  <div className='contenedordatosder'>
                    <TextField
                      label='Apellido'
                      name='lastname'
                      type='text'
                      register={register}
                    />
                    {errors.name && <span>{errors.name?.message}</span>}
                    <TextField
                      className='textfield'
                      label='Contraseña'
                      name='password'
                      type='password'
                      register={register}
                    />
                    {errors.password ? <span>{errors.password?.message}</span> : <span />}
                    <TextField
                      label='Telefono'
                      name='tel'
                      type='tel'
                      pattern='[0-9]{10}'
                      register={register}
                    />
                    {errors.tel ? <span>{errors.tel?.message}</span> : <span />}

                    <div className='mt-6 mb-6'>
                      <h1>Ciudad</h1>
                      <Controller
                        control={control}
                        name='municipio'
                        render={({ field }) =>
                          <Select
                            {...field}
                            className='w-40'
                            options={ciudades.map((ciudad) => {
                              return ({
                                value: ciudad,
                                label: ciudad
                              })
                            })}
                          />}
                      />

                    </div>

                    {errors.mn ? <span>{errors.mn?.message}</span> : <span />}
                    <TextField
                      label='Colonia'
                      name='col'
                      type='text'
                      register={register}
                      className='textfield'
                    />
                    {errors.col ? <span>{errors.col?.message}</span> : <span />}
                    <TextField
                      label='Calle'
                      name='street'
                      type='text'
                      register={register}
                    />
                    {errors.calle ? <span>{errors.calle?.message}</span> : <span />}<br /><br />
                    <center>
                      <button
                        type='submit'
                        className='botonguardar'
                      >Crear
                      </button>
                      <NavLink
                        className='botonguardar'
                        to='/login'
                      >Ingresar
                      </NavLink>
                    </center>
                  </div>
                </div>
              </form>}

          </div>
        </main>
      </center>
    </>
  )
}
