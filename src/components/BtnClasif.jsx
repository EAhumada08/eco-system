export default function BtnClasif ({ current, setCurrent, name, number, firstP, secondP }) {
  const next = () => {
    setCurrent(current + 1)
  }

  return (
    <button
      onClick={() => next()}
      name={name}
      className=' w-fit p-5 flex flex-col justify-normal rounded-md bg-yellow-300'
    >
      {number}<p>{firstP}</p><p>{secondP} </p>
    </button>

  )
}
