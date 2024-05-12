import { MailOutlined } from '@ant-design/icons'
import { Button, ConfigProvider, Form, Input, Select } from 'antd'
import { states } from '../../const/states'

export default function EditProfile ({ client }) {
  const [form] = Form.useForm()
  const state = Form.useWatch('state', form)

  const result = states.find((name) => name.nombre === state)
  const ciudades = result?.ciudades

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  return (
    <div className='p-4 m-4  flex flex-col gap-y-5 justify-center items-center'>

      <div className='flex p-2'>
        <ConfigProvider
          theme={{
            components: {
              Form: {
                labelFontSize: 20
              },
              Input: {
                inputFontSize: 18
              },
              Button: {
                fontSize: 15
              }
            },
            token: {
              colorPrimary: '#00BF63',
              fontFamily: 'Codec Pro,sans-serif'
            }
          }}
        >

          <Form
            initialValues={client}
            form={form}
            onFinish={onFinish}
          >
            <h2 className=' font-bold text-lg mb-7'>Informacion personal</h2>
            <div className='grid grid-cols-2 gap-x-10'>

              <Form.Item
                label='Nombre'
                name='firstname'
              >
                <Input className='border-2 border-black' />
              </Form.Item>
              <Form.Item
                label='Apellido'
                name='lastname'
              >
                <Input className='border-2 border-black' />
              </Form.Item>
              <Form.Item
                name='email'
                label='Correo'
                rules={[
                  {
                    type: 'email',
                    message: 'No es una direccion de correo valida'
                  },
                  {
                    required: true,
                    message: 'Porfavor ingresa tu correo'
                  }
                ]}
              >
                <Input
                  className='border-2 border-black'
                  prefix={<MailOutlined />}
                />
              </Form.Item>
              <Form.Item
                name='password'
                label='Contraseña'
                rules={[
                  {
                    type: 'password'
                  }
                ]}
              >
                <Input
                  className='border-2 border-black'
                  type='password'
                />
              </Form.Item>
            </div>
            <h2 className=' font-bold text-lg mb-4'>Informacion de contacto</h2>
            <div className='grid grid-cols-6 gap-x-5'>
              <Form.Item
                className='col-span-2'
                name='calle'
                label='Calle'
              >
                <Input />
              </Form.Item>
              <Form.Item
                name='extN'
                label='#Ext'
              >
                <Input />
              </Form.Item>
              <Form.Item
                name='intN'
                label='#Int'
              >
                <Input />
              </Form.Item>
              <Form.Item
                className='col-span-2'
                name='col'
                label='Colonia'
              >
                <Input />
              </Form.Item>
              <Form.Item
                name='cp'
                label='Codigo Postal'
              >
                <Input />
              </Form.Item>
              <Form.Item
                name='state'
                label='Estado'
              >
                <Select
                  options={states.map((state) => {
                    return (
                      {
                        value: state.nombre,
                        label: state.nombre
                      }
                    )
                  })}
                />
              </Form.Item>
              <Form.Item
                name='city'
                label='Ciudad'
              >
                <Select
                  options={ciudades?.map((ciudad) => {
                    return (
                      {
                        value: ciudad,
                        label: ciudad
                      }
                    )
                  })}
                />
              </Form.Item>
            </div>
            <Button htmlType='submit'>Guardar Cambios</Button>
          </Form>
        </ConfigProvider>

      </div>

    </div>
  )
}
