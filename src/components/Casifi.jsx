import BtnClasif from './BtnClasif'
import { clasif } from '../const/Clasif'

export default function Clasifi ({ current, setCurrent }) {
  return (
    <div className='p-10 items-center flex flex-col justify-center gap-y-6'>
      <h1 className='text-center'>Clasificacion desechos tecnologicos</h1>
      <div className='grid grid-cols-4 gap-4'>
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
