import { useForm } from 'react-hook-form'
import { TextField } from './TextField'
import { message } from 'antd'

export default function FormW ({ current, setCurrent }) {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    message.success('Proceso completado')
    setCurrent(0)
    const idClient = window.localStorage.getItem('idUser')
    console.log({ idClient, data })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className=' p-6 flex flex-row gap-x-16 justify-center'>
      <div className='flex flex-col gap-y-5'>
        <TextField
          label='Numero de serie'
          name='numSerie'
          type='text'
          register={register}
          className='textfield'
        />
        <TextField
          label='Nombre'
          name='name'
          type='text'
          register={register}
          className='textfield '
        />
        <TextField
          label='Marca'
          name='marca'
          type='text'
          register={register}
          className='textfield '
        />
        <TextField
          label='Modelo'
          name='model'
          type='text'
          register={register}
          className='textfield '
        />
        <select name='color' id='' {...register('color')}>
          <option value='Rojo'>Rojo</option>
          <option value='Azul'>Azul</option>
          <option value='Verde'>Verde</option>
        </select>
      </div>
      <div className=' flex flex-row gap-x-16'>
        <TextField
          label='Peso'
          name='peso'
          type='text'
          register={register}
          className='textfield '
        />
        <TextField
          label='Fecha de adquisicion'
          name='date'
          type='date'
          register={register}
          className='textfield '
        />
        <button
          className='border-2 border-black rounded-lg bg-[#00BF63] p-2 hover:bg-green-300 h-fit'
        >Guardar datos
        </button>
      </div>

    </form>
  )
}
