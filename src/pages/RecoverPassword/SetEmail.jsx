import { Form, Input, ConfigProvider, Button } from 'antd'
import { NavLink, useNavigate } from 'react-router-dom'
import { validateEmail } from '../../services/resetPassword'
import { useContext } from 'react'
import { RecoveryContext } from './RecoverPassword'
import axios from 'axios'

export default function SetEmail () {
  const { setPage, setEmail, email, setOTP, setId } = useContext(RecoveryContext)
  const [form] = Form.useForm()

  const navigate = useNavigate()

  async function navigateToOTP () {
    if (email) {
      const OTP = Math.floor(Math.random() * 9000 + 1000)
      setOTP(OTP)

      await axios.post('http://localhost:1234/send_recovery_email', {
        OTP,
        userEmail: email
      })
        .then(() => setPage('otp'))
        .catch(console.log)
    }
  }

  const onFinish = async (values) => {
    console.log(values)
    try {
      const user = await validateEmail(values)
      setId(user.data.user.id)
      setEmail(user.data.user.email)
      console.log(user.data.user.email)
      try {
        await navigateToOTP()
      } catch (error) {
        console.log(error)
      }
    } catch (error) {
      console.log(error.response.data)
      navigate('/login')
    }
  }
  return (

    <section className='h-screen flex'>
      <div className='mt-32  p-2 flex flex-col w-96 items-center'>
        <img
          className=' w-32 flex justify-center items-center mb-5'
          src='../../public/imgs/logoEs.png' alt=''
        />
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
            className='flex flex-col '
            layout='vertical'
          >

            <Form.Item
              name='email'
              label='Correo: '
            >
              <Input size='large' />
            </Form.Item>
            <Button htmlType='submit'>Recuperar contraseña</Button>
          </Form>
        </ConfigProvider>
        <div className='flex flex-row mt-5 '>
          <h1>Ya tienes una cuenta?</h1>
          <NavLink className=' text-green-600' to='/login'>Ingresa</NavLink>
        </div>

      </div>
    </section>

  )
}
