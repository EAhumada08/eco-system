import "../estilos/login.css"
import { TextField } from '../components/TextField'
import Result from '../components/Result'
import { NavLink } from 'react-router-dom'
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
    <center>
      <main >
        <div class="divfondocrearcuenta">
          {userRegistered
            ? <Result />
            : <form onSubmit={handleSubmit(onSubmit)}>
               <center>
              <div class="titulo">
                <label for="crear">Crear cuenta</label>
              </div>
              </center><br /><br />
              <div class="contenedorizq" >
                <div class="contenedordatosizq">
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
                  <TextField
                    label='Sexo'
                    name='sexo'
                    type='text'                  
                    register={register}
                  />
                  {errors.estado ? <span>{errors.estado?.message}</span> : <span />}
                  <TextField
                    label='Estado'
                    name='estado'
                    type='text'                  
                    register={register}
                  />
                  {errors.estado ? <span>{errors.estado?.message}</span> : <span />}
                  <TextField
                    label='Código postal'
                    name='cp'
                    type='cp'
                    pattern='[0-9]{10}'
                    register={register}
                  />
                  {errors.cp ? <span>{errors.cp?.message}</span> : <span />}
                  <div class="divdatosder2">
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
                      {errors.numex ? <span >{errors.numex?.message}</span> : <span />}
                    </div>

                  </div>
                </div>
              </div> 
              <div class="contenedorder">
                <div class="contenedordatosder">
                  <TextField
                    label='Apellido'
                    name='apell'
                    type='text'
                    register={register}
                  />
                  {errors.name && <span>{errors.name?.message}</span>}
                  <TextField
                    class='textfield'
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
                  <TextField
                    label='Municipio'
                    name='mn'
                    type='text'                  
                    register={register}
                  />
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
                    name='calle'
                    type='text'
                    register={register}
                  />
                  {errors.calle ? <span >{errors.calle?.message}</span> : <span />}<br /><br />
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