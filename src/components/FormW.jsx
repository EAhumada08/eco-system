import { useForm } from 'react-hook-form'
import { TextField } from './TextField'

export default function FormW () {
  const { register, handleSubmit } = useForm()
  return (
    <form className=' p-6 flex flex-row gap-x-16 justify-center'>
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
          name='name'
          type='text'
          register={register}
          className='textfield '
        />
        <TextField
          label='Modelo'
          name='name'
          type='text'
          register={register}
          className='textfield '
        />
        <TextField
          label='Color'
          name='name'
          type='text'
          register={register}
          className='textfield '
        />
      </div>
      <div className=' flex flex-row gap-x-16'>
        <TextField
          label='Peso'
          name='name'
          type='text'
          register={register}
          className='textfield '
        />
        <TextField
          label='Fecha de adquisicion'
          name='name'
          type='date'
          register={register}
          className='textfield '
        />

      </div>

    </form>
  )
}
