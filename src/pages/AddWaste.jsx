import { Button, Steps, theme, ConfigProvider } from 'antd'
import { useEffect, useState } from 'react'
import Clasif from '../components/Clasif'
import TypeWaste from '../components/TypeWaste'
import FormW from '../components/FormW'

export default function AddWaste () {
  const { token } = theme.useToken()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    window.localStorage.removeItem('clasif')
  }, [])

  const prev = () => {
    setCurrent(current - 1)
  }

  const steps = [
    {
      title: 'Seleccionar clasificacion de desecho',
      content: (

        <Clasif current={current} setCurrent={setCurrent} />

      )
    },
    {
      title: 'Seleccionar tipo de desecho',
      content: (
        <TypeWaste current={current} setCurrent={setCurrent} />
      )
    },
    {
      title: 'Ingresar datos',
      content: <FormW current={current} setCurrent={setCurrent} />
    }
  ]

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title
  }))

  const contentStyle = {
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16
  }

  return (
    <div className=' w-full p-10'>
      <ConfigProvider
        theme={{

          token: {
            colorPrimary: '#00BF63'
          }

        }}
      >
        <Steps current={current} items={items} />
      </ConfigProvider>

      <div
        className='  bg-green-200'
        style={contentStyle}
      > {steps[current].content}
      </div>
      <div style={{ marginTop: 24 }}>

        {current > 0 && (
          <Button
            className=''
            onClick={() => prev()}

          >
            Volver
          </Button>
        )}

      </div>

    </div>
  )
}
