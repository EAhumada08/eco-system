export default function TextField ({ label, type, register, name, pattern }) {
  return (
    <label className='static flex-none'>
      <span className='block'>{label}</span>
      <input
        className='border-2 rounded-md border-black p-1 w-full focus:outline-none'
        type={type}
        {...register(name)}
        required
        pattern={pattern}
      />
    </label>

  )
}
