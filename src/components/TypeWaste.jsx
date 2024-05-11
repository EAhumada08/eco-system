import BtnType from './BtnType'
import { types } from '../const/types'

export default function TypeWaste ({ current, setCurrent }) {
  const a = window.localStorage.getItem('clasif')
  const result = types.find((type) => type.clase === a)
  const { images } = result
  console.log(images)

  return (
    <div className='p-10 items-center flex flex-col justify-center gap-y-6'>
      <h1 className='text-center' />
      <div className='grid grid-cols-4 gap-4'>
        {images.map((image, index) => {
          return (
            <BtnType
              key={index}
              current={current} setCurrent={setCurrent}
              img={image}
            />
          )
        })}

      </div>

    </div>
  )
}
