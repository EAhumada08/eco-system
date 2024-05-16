import '../estilos/recolector.css'
import Result from '../components/Result'
import { NavLink } from 'react-router-dom'
import { registerClient } from '../services/clients'
import { useState } from 'react'
import { Form, Select, Input, Button, ConfigProvider } from 'antd'
import { states } from '../const/states'

export default function NewClient () {
  const [form] = Form.useForm()
  const state = Form.useWatch('state', form)

  const result = states.find((name) => name.nombre === state)
  const ciudades = result?.ciudades

  const [userRegistered, setUserRegistered] = useState(false)

  const onFinish = async (values) => {
    console.log('Received values of form: ', values)
    try {
      const res = await registerClient(values)
      console.log(res)
      setUserRegistered(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {
      userRegistered
        ? <Result />
        : <div className=' border-2 border-black p-3 flex items-center h-dvh flex-col'>
          <div className='titulorecolector'>
            <label htmlFor='crear'>Crear cuenta</label>
          </div>
          <ConfigProvider
            theme={{
              token: {
                fontSize: 20,
                colorPrimary: '#00BF63',
                fontFamily: 'Codec Pro,sans-serif'
              }
            }}
          >
            <Form
              initialValues={{ state: 'Aguascalientes', city: 'Aguascalientes' }}
              form={form}
              onFinish={onFinish}
              layout='vertical'
              className=' mt-10'
            >
              <div className='grid grid-cols-2 gap-x-20'>
                <div>
                  <div className='flex flex-row gap-x-6'>
                    <Form.Item
                      name='firstname'
                      label='Nombre'
                    >
                      <Input variant='filled' />
                    </Form.Item>
                    <Form.Item
                      name='lastname'
                      label='Apellido'
                    >
                      <Input variant='filled' />
                    </Form.Item>
                  </div>
                  <Form.Item
                    name='email'
                    label='Correo'
                  >
                    <Input variant='filled' />
                  </Form.Item>
                  <div className='flex  flex-row gap-x-6'>
                    <Form.Item
                      name='pass'
                      label='Contraseña'
                      rules={[
                        {
                          required: true,
                          message: 'Porfavor ingresa una contraseña'
                        }
                      ]}
                      hasFeedback
                    >
                      <Input.Password variant='filled' />
                    </Form.Item>
                    <Form.Item
                      name='confirm'
                      label='Confirmar contraseña'
                      dependencies={['pass']}
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: 'Confirma la contraseña'
                        },
                        ({ getFieldValue }) => ({
                          validator (_, value) {
                            if (!value || getFieldValue('pass') === value) {
                              return Promise.resolve()
                            }
                            return Promise.reject(new Error('La contraseña no coincide'))
                          }
                        })
                      ]}
                    >
                      <Input.Password variant='filled' />
                    </Form.Item>
                  </div>

                  <Form.Item
                    name='tel'
                    label='Telefono'
                  >
                    <Input variant='filled' />
                  </Form.Item>

                </div>

                <div className=''>

                  <Form.Item
                    name='calle'
                    label='Calle'
                  >
                    <Input variant='filled' />
                  </Form.Item>
                  <div className='flex flex-row gap-x-6'>
                    <Form.Item
                      name='extN'
                      label='Numero exterior'
                    >
                      <Input variant='filled' />
                    </Form.Item>
                    <Form.Item
                      name='intN'
                      label='Numero interior'
                    >
                      <Input variant='filled' />
                    </Form.Item>
                  </div>

                  <div className='flex flex-row gap-x-6'>
                    <Form.Item
                      name='col'
                      label='Colonia'
                    >
                      <Input variant='filled' />
                    </Form.Item>
                    <Form.Item
                      name='cp'
                      label='Codigo postal'
                    >
                      <Input variant='filled' />
                    </Form.Item>
                  </div>

                  <div className='flex flex-row gap-x-6'>
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
                      <Select options={ciudades?.map((ciudad) => {
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

                </div>
              </div>
              <div className='flex gap-x-6'>
                <Button htmlType='submit'>Registrar</Button>
                <NavLink to='/login'>Ingresar</NavLink>
              </div>

            </Form>
          </ConfigProvider>
          </div>
    }
    </>
  )
}
