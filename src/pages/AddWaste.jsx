import { Button, Steps, theme, message } from 'antd'
import { useState } from 'react'
import BtnClasif from '../components/BtnClasifi'

export default function AddWaste () {
  const { token } = theme.useToken()
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }
  const steps = [
    {
      title: 'First',
      content: (
        <div className='p-10 items-center flex flex-col justify-center gap-y-6'>
          <h1 className='text-center'>Clasificacion desechos tecnologicos</h1>
          <div className='flex flex-row'>
            <BtnClasif onClick={() => next()} />
          </div>
          <div className='flex flex-row'>
            <button>1</button>
            <button>1</button>

          </div>
        </div>
      )
    },
    {
      title: 'Second',
      content: 'Second-Content'
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
      <Steps current={current} items={items} />
      <div
        className=' h-fit'
        style={contentStyle}
      > {steps[current].content}
      </div>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type='primary' onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type='primary' onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px'
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}

      </div>

    </div>
  )
}
