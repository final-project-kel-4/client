import React, {useState} from "react";
import { FiMail, FiLock } from "react-icons/fi";
import styled, { keyframes } from "styled-components";
import { slideOutLeft, slideInLeft } from "react-animations";
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import {connect} from 'react-redux';
import { setLogin } from '../store/action';

const slideOutAnimation = keyframes`${slideOutLeft}`;
const slideLeftAnimation = keyframes`${slideInLeft}`;
const SlideInLeft = styled.div`
  animation: 0.5s ${slideLeftAnimation};
`;
const SlideOutLeft = styled.div`
  animation: 0.5s ${slideOutAnimation}
`

function LoginFormOnly(props) {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const { setIsRegistring } = props.registring;
  const {isNavigatingToRegister, setIsNavigatingToRegister} = props.navigations
  const navigator = e => {
    e.preventDefault();
    setIsNavigatingToRegister(true)
    setTimeout(
      function(){
        setIsRegistring(true)
        setIsNavigatingToRegister(false)
      },
      300
    )
  };

  function reset(){
    setEmail('')
    setPassword('')
  }

  function login(e){
    e.preventDefault()
    
    if(email&&password){
      axios.post(`http://localhost:3000/user/signin`, {email,password})
      .then(({data})=>{
        localStorage.setItem('token', data.token)
        swal('Welcome Back ','','success')
        props.setLogin(true)
        props.history.push("/");
        reset()
      })
      .catch((err)=>{
        console.log(err);
        swal('Please try again','','warning')
      })
    }else{
      swal('Please complete the form','','warning')
    }
  }

  return (
    <>
      <form onSubmit={login}>
        {!isNavigatingToRegister ?  <SlideInLeft>
          <div
            style={{
              backgroundColor: "#EFF2F5",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              paddingTop: "18px",
              width: "400px"
            }}
            className="row px-3"
          >
            <div className="col col-md-2">
              <FiMail
                style={{
                  fontSize: "33px",
                  color: "grey"
                }}
              />
            </div>
            <div className="col col-md-10">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  style={{
                    width: "250px"
                  }}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div
            className="row px-3"
            style={{
              backgroundColor: "#EFF2F5",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              paddingBottom: "5px"
            }}
          >
            <div className="col col-md-2">
              <FiLock
                style={{
                  fontSize: "33px",
                  color: "grey"
                }}
              />
            </div>
            <div className="cold col-md-10">
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="passwordInput"
                  placeholder="Enter password"
                  style={{
                    width: "250px"
                  }}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
        </SlideInLeft> :
        <SlideOutLeft>
          <div
            style={{
              backgroundColor: "#EFF2F5",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              paddingTop: "18px",
              width: "400px"
            }}
            className="row px-3"
          >
            <div className="col col-md-2">
              <FiMail
                style={{
                  fontSize: "33px",
                  color: "grey"
                }}
              />
            </div>
            <div className="col col-md-10">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  style={{
                    width: "250px"
                  }}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div
            className="row px-3"
            style={{
              backgroundColor: "#EFF2F5",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              paddingBottom: "5px"
            }}
          >
            <div className="col col-md-2">
              <FiLock
                style={{
                  fontSize: "33px",
                  color: "grey"
                }}
              />
            </div>
            <div className="cold col-md-10">
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="passwordInput"
                  placeholder="Enter password"
                  style={{
                    width: "250px"
                  }}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
        </SlideOutLeft>
      }
       
        <div className="row" style={{
          paddingTop: "95px",
          marginBottom: "20px"
        }}>
          <div className="col d-flex justify-content-around">
            <button
              className="btn btn-primary px-4"
              style={{
                fontSize: "17px"
              }}
            >
              Login Now!
            </button>
            <button
              className="btn btn-light px-4"
              style={{
                fontSize: "17px"
              }}
              onClick={navigator}
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

const mapDispatchToProps = {
  setLogin,
}

export default connect(null, mapDispatchToProps)(withRouter(LoginFormOnly))