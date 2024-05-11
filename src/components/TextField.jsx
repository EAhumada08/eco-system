export function TextField ({ label, type, register, name, pattern, error }) {
  return (
    <label>
      <span className='block'>{label}</span>
      <input
        className={error
          ? 'border-2 rounded-md border-red-600 p-1 w-full focus:outline-none'
          : 'border-2 rounded-md border-black p-1 w-full focus:outline-none'}
        type={type}
        {...register(name)}
        required
        pattern={pattern}
      />
    </label>

  )
}
