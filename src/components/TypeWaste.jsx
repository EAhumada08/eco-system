import BtnClasif from './BtnClasif'

export default function TypeWaste ({ current, setCurrent }) {
  return (
    <div className='p-10 items-center flex flex-col justify-center gap-y-6'>
      <h1 className='text-center'>Pequenos</h1>
      <div className='grid grid-cols-4 gap-4'>
        <BtnClasif current={current} setCurrent={setCurrent} />
        <BtnClasif current={current} setCurrent={setCurrent} />
        <BtnClasif current={current} setCurrent={setCurrent} />
        <BtnClasif current={current} setCurrent={setCurrent} />
        <BtnClasif current={current} setCurrent={setCurrent} />
      </div>

    </div>
  )
}
