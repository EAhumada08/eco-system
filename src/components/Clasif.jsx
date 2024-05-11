import { clasif } from '../const/Clasif'
import BtnClasif from './BtnClasif'

export default function Clasif ({ current, setCurrent }) {
  return (
    <div className='p-10 items-center flex flex-col justify-center gap-y-6'>
      <h1 className='text-center'>Clasificación desechos tecnologicos</h1>
      <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-5'>
        {clasif.map((element, index) => {
          return (
            <BtnClasif
              key={index}
              current={current} setCurrent={setCurrent}
              name={element.name}
              number={element.number}
              firstP={element.firstP}
              secondP={element.secondP}
            />
          )
        })}

      </div>

    </div>
  )
}
