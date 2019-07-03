import React from 'react'
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { setLogin } from '../store/action';
import swal from 'sweetalert';

function Navbar(props) {
  if(localStorage.token){
    props.setLogin(true)
  }

  function logout(){
    swal({
      title: "Are you sure to log out?",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(confirm => {
      if (confirm) {
        props.setLogin(false)
        props.history.push("/login")
        swal("Bye-bye",'Hope to see you soon', "success")
        localStorage.removeItem('token')
      }
    });
  }

  return (
    <>
     <nav className="navbar" style={{
       backgroundColor: "#e4eff2"
     }}>
      <Link to="/">
        <div className="navbar-brand mr-auto"style={{
          color: "black"
        }}><img src="https://i.imgur.com/Iz42FEQ.png" alt="Not found"style={{
          width: "33px"
        }}/>
        <img src="https://i.imgur.com/v6EfffO.png" alt="Not found" style={{
          width: "60px",
          marginLeft: "10px"
        }}/>
        </div>
      </Link>
      
      
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