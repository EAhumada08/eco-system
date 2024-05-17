import { Button, Input, Typography } from 'antd'
import { useContext, useState } from 'react'
import { RecoveryContext } from './RecoverPassword'
const { Title } = Typography

export default function OTPInput () {
  const { email, otp, setPage } = useContext(RecoveryContext)
  const [otpInput, setOtpInput] = useState('')

  const verfiyOTP = () => {
    if (parseInt(otpInput) === otp) {
      setPage('reset')
      return
    }
    alert(
      'El codigo no es correcto, prueba de nuevo'
    )
  }

  const onChange = (text) => {
    setOtpInput(text)
    console.log(setOtpInput)
  }

  const sharedProps = {
    onChange
  }
  return (
    <div className='flex mt-32 h-screen'>
      <div className='flex flex-col gap-y-10 text-center'>
        <Title level={2}>Verificacion de Correo Electronico</Title>
        <Title level={4}>Hemos enviado un codigo de verificacion a {email}</Title>
        <Input.OTP size='large' length={4} {...sharedProps} />
        <Button onClick={verfiyOTP}>Verificar cuenta</Button>
      </div>
    </div>

  )
}
