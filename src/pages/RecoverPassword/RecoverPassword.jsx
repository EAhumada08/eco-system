import { createContext, useState } from 'react'
import SetEmail from './SetEmail'
import OTPInput from './OTPInput'
import Reset from './Reset'

export const RecoveryContext = createContext()

export default function RecoverPassword () {
  const [page, setPage] = useState('setemail')
  const [email, setEmail] = useState()
  const [id, setId] = useState()
  const [otp, setOTP] = useState()

  function NavigateComponents () {
    if (page === 'setemail') return <SetEmail />
    if (page === 'otp') return <OTPInput />
    if (page === 'reset') return <Reset />
  }

  return (
    <RecoveryContext.Provider
      value={{ page, setPage, otp, setOTP, email, setEmail, id, setId }}
    >
      <div className=' flex justify-center items-center'>
        <NavigateComponents />
      </div>
    </RecoveryContext.Provider>

  )
}
