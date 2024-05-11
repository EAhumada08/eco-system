export default function BtnClasif ({ current, setCurrent, name, number, firstP, secondP }) {
  const next = () => {
    setCurrent(current + 1)
    window.localStorage.setItem('clasif', name)
  }

  return (
    <button
      onClick={() => next()}
      name={name}
      className=' border-2 border-black w-fit p-5  flex flex-col justify-normal rounded-md font-bold text-lg'
    >
      {number}<p>{firstP}</p><p>{secondP} </p>
    </button>

  )
}
