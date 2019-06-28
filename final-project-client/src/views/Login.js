import React from 'react'
import { connect } from 'react-redux'
import { login } from '../store/action'
import {FiMail, FiLock} from 'react-icons/fi'
import "../css/Login.css"
function Login() {
  return (
    <div className="container" style={{
      paddingTop: "5vh"
    }}>
      <div className="row">
        <div className="col col-md-5">
        <div className="row d-flex justify-content-center">
          <h2 className="text-center">Welcome :)</h2>
        </div>
        <div className="row d-flex justify-content-center">
          <form>
            <div style={{
              backgroundColor: "#EFF2F5",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              paddingTop: "18px",
              width: "400px"
            }} className="row px-3">
              <div className="col col-md-2">
                <FiMail style={{
                  fontSize: "33px",
                  color: "grey"
                }}/>
              </div>
              <div className="col col-md-10">
                <div className="form-group">
                  <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" style={{
                    width: "250px"
                  }}/>
                </div>
              </div>
            </div>
            <div className="row px-3" style={{
              backgroundColor: "#EFF2F5",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              paddingBottom: "5px"
            }}>
              <div className="col col-md-2">
                <FiLock style={{
                  fontSize: "33px",
                  color: "grey"
                }}/>
              </div>
              <div className="cold col-md-10">
                <div className="form-group">
                  <input type="password" className="form-control" id="passwordInput" placeholder="Enter password" style={{
                    width: "250px"
                  }}/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-around">
                <button className="btn btn-primary px-4" style={{
                  fontSize: "17px"
                }}>Login</button>
                <button className="btn btn-light px-4" style={{
                  fontSize: "17px"
                }}>Register</button>                 
              </div>
            </div>
          </form>
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
