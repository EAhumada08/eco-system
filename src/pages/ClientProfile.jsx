import { MailOutlined } from '@ant-design/icons'
import { Button, ConfigProvider, Form, Input, Select } from 'antd'
import { useEffect, useState } from 'react'
import { states } from '../const/states'
import { getClientById } from '../services/clients'

export default function ClientProfile () {
  const [form] = Form.useForm()
  const [componentDisabled, setComponentDisable] = useState({ disabled: true, text: 'Editar datos' })
  const [client, setClient] = useState()

  const getClient = async () => {
    const id = window.localStorage.getItem('idUser')
    console.log(id)
    try {
      const res = await getClientById(id)
      console.log(res)
      setClient(res)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getClient()
  }, [])
  console.log(client?.firstname)

  const handleComponentDisable = () => {
    componentDisabled.disabled
      ? setComponentDisable({ disabled: false, text: 'Dejar de editar' })
      : setComponentDisable({ disabled: true, text: 'Editar datos' })
  }

  const state = Form.useWatch('state', form)
  const result = states.find((name) => name.nombre === state)
  const ciudades = result?.ciudades

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  const clientData = {
    lastname: client?.firstname
  }

  return (

    <div className='p-4 m-4  flex flex-col gap-y-5 justify-center items-center'>
      <h1>{client?.firstname}</h1>

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
            initialValues={clientData}
            form={form}
            onFinish={onFinish}
            disabled={componentDisabled.disabled}
          >
            <h2 className=' font-bold text-lg mb-7'>Informacion personal</h2>
            <div className='grid grid-cols-2 gap-x-10'>

              <input type='text' name='NOSE' defaultValue={client?.firstname} />
              <Form.Item
                label='Nombre'
                name='firstname'
                initialValue={client?.firstname}
              >
                <Input className='border-2 border-black' />
              </Form.Item>
              <Form.Item label='Apellido' name='lastname'>
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
                name='street'
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
      <button
        onClick={handleComponentDisable}
      >{componentDisabled.text}
      </button>

    </div>
  )
}
