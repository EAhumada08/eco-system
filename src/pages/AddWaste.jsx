import { Button, Steps, theme, message, ConfigProvider } from 'antd'
import { useState } from 'react'
import Clasifi from '../components/Casifi'
import TypeWaste from '../components/TypeWaste'

export default function AddWaste () {
  const [current, setCurrent] = useState(0)
  console.log(current)
  const prev = () => {
    setCurrent(current - 1)
  }
  const { token } = theme.useToken()

  const steps = [
    {
      title: 'Seleccionar tipo de desecho',
      content: (

        <Clasifi current={current} setCurrent={setCurrent} />

      )
    },
    {
      title: 'Tipo',
      content: <TypeWaste current={current} setCurrent={setCurrent} />
    },
    {
      title: 'Last',
      content: 'Last-Content'
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
        {current === steps.length - 1 && (
          <Button type='primary' onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            onClick={() => prev()}
            style={{
              margin: '0 8px'
            }}

          >
            Previous
          </Button>
        )}

      </div>

    </div>
  )
}
