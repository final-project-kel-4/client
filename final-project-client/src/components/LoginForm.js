import React, {useState} from 'react'
import LoginFormOnly from './LoginFormOnly'
import RegisterForm from './RegisterForm'

export default function LoginForm() {
  const [isRegistring, setIsRegistring] = useState(false)
  const [isNavigatingToRegister, setIsNavigatingToRegister] = useState(false)
  const [isNavigatingToLogin, setIsNavigatingToLogin] = useState(false)
  return (
    <>
      {isRegistring ? 
      <div style={{
        borderRadius: "10px",
        overflow: "hidden"
      }}><RegisterForm registring={{isRegistring, setIsRegistring}} navigations={{
        isNavigatingToLogin, setIsNavigatingToLogin
      }}/></div>: 
      <div style={{
        borderRadius: "10px",
        overflow: "hidden"
      }}><LoginFormOnly registring={{isRegistring,setIsRegistring}} navigations={{
        isNavigatingToRegister, setIsNavigatingToRegister
      }}/></div>}
    </>
  )
}
