import { Form, Input, ConfigProvider, Button } from 'antd'
import { resetPassword } from '../../services/clients'
import { useContext } from 'react'
import { RecoveryContext } from './RecoverPassword'
import { useNavigate } from 'react-router-dom'

export default function Reset () {
  const [form] = Form.useForm()
  const { id } = useContext(RecoveryContext)

  const navigate = useNavigate()

  const onFinish = async (values) => {
    try {
      await resetPassword(id, values)
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='mt-32 flex flex-col '>
      <ConfigProvider
        theme={{
          token: {
            fontSize: 20,
            colorPrimary: '#00BF63',
            fontFamily: 'Codec Pro,sans-serif'
          },
          components: {
            Button: {
              defaultBg: '#00BF63',
              defaultHoverBg: 'B5FF83',
              defaultHoverColor: '000000'

            }
          }
        }}
      >
        <Form
          form={form}
          onFinish={onFinish}
          className='items-center flex flex-col gap-y-5'
          layout='vertical'
        >
          <Form.Item
            name='pass'
            label='Nueva contraseña: '
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Porfavor ingresa una contraseña'
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='confirm'
            label='Confirmar contraseña: '
            dependencies={['pass']}
            hasFeedback
            rules={[{
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
            })]}
          >
            <Input />
          </Form.Item>

          <Button htmlType='submit'>Cambiar contraseña</Button>
        </Form>
      </ConfigProvider>
    </div>
  )
}
