import React from 'react'
import { connect } from 'react-redux'
import { login } from '../store/action'
import LoginForm from '../components/LoginForm'
import "../css/Login.css"

function Login() {
  return (
    <div className="container" style={{
      paddingTop: "5vh"
    }}>
      <div className="row">
        <div className="col col-md-5" style={{
          paddingTop: "15vh"
        }}>
        <div className="row d-flex justify-content-center" style={{
          marginBottom: "7vh"
        }}>
          <h2 className="text-center">Welcome :)</h2>
        </div>
        <div className="row d-flex justify-content-center">
          <LoginForm/>
        </div>
      </div>
        <div className="col col-md-6">
          <img src="https://i.imgur.com/HrFaV3Q.jpg" alt={<h1>image not found</h1>} style={{
            height: "720px",
            width: "720px",
            paddingBottom: "50px"
          }}/>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
