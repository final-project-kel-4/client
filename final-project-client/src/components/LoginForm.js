import React, {useState} from 'react'
import LoginFormOnly from './LoginFormOnly'
import RegisterForm from './RegisterForm'
// import styled, { keyframes } from "styled-components"
// import { slideInRight, slideInLeft } from "react-animations"
// const slideRightAnimation = keyframes`${slideInRight}`
// const slideLeftAnimation = keyframes`${slideInLeft}`
// const SlideInRight = styled.div`animation: 1s ${slideRightAnimation};`
// const SlideInLeft = styled.div`animation: 1s ${slideLeftAnimation}`



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
