import React from 'react'

export default function Navbar() {
  return (
    <>
     <nav className="navbar" style={{
       backgroundColor: "#EFF2F5"
     }}>
      <a className="navbar-brand mr-auto" href="#" style={{
        color: "black"
      }}>HR</a>
      <button className="btn btn-outline-info">Log Out</button>
     </nav>
    </>
  )
}
