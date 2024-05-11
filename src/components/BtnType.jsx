export default function BtnType ({ current, setCurrent, img }) {
  const next = () => {
    setCurrent(current + 1)
  }

  return (
    <button
      onClick={() => next()}
      className=' border-2 border-black w-fit p-5  flex flex-col justify-normal rounded-md'
    >
      <img src={img} alt='' />
    </button>

  )
}
