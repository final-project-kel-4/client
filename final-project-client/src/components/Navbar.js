import React from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { setLogin } from '../store/action';
import swal from 'sweetalert'

function Navbar(props) {
  if(localStorage.token){
    props.setLogin(true)
  }

  function logout(){
    props.setLogin(false)
    swal('bye :)', 'success')
    localStorage.removeItem('token')
    props.history.push('/login')
  }

  return (
    <>
     <nav className="navbar" style={{
       backgroundColor: "#EDF5F7"
     }}>
      <a className="navbar-brand mr-auto" href="#" style={{
        color: "black"
      }}><img src="https://i.imgur.com/UEh1mIz.png" style={{
        width: "100px",
        borderRadius: "4px"
      }}/></a>
      {
        props.statusLogin && <button className="btn btn-outline-info" style={{
          backgroundColor: "#143D5C",
          color: "white" }}  onClick={logout}>Log Out</button>
      }      
     </nav>
    </>
  )
}

const mapStateToProps= state =>{
  return {
    statusLogin : state.isLogin
  }
}

const mapDispatchToProps = {
  setLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))