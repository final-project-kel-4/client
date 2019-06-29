import React from 'react'

export default function Navbar() {
  return (
    <>
     <nav className="navbar" style={{
       backgroundColor: "#e4eff2"
     }}>
      <a className="navbar-brand mr-auto" href="/" style={{
        color: "black"
      }}><img src="https://i.imgur.com/UEh1mIz.png" alt="Not found"style={{
        width: "100px",
        borderRadius: "4px"
      }}/></a>
      <button className="btn btn-outline-info" style={{
        backgroundColor: "#143D5C",
        color: "white"
      }}>Log Out</button>
     </nav>
    </>
  )
}
