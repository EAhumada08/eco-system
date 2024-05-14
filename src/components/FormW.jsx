import { Controller, useForm } from 'react-hook-form'
import { TextField } from './TextField'
import { Radio, message } from 'antd'

export default function FormW ({ current, setCurrent }) {
  const { register, handleSubmit, control } = useForm()

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
      <div className=' flex flex-col gap-y-10'>
        <TextField
          label='Peso'
          name='peso'
          type='number'
          register={register}
          className='textfield '
        />

        <Radio.Group>

          <Controller
            name='estado'
            control={control}
            render={({ field }) => <Radio {...field} value='sirve'>Sirve</Radio>}
          />
          <Controller
            name='estado'
            control={control}
            render={({ field }) => <Radio {...field} value='no sirve'>No sirve</Radio>}
          />
        </Radio.Group>
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
