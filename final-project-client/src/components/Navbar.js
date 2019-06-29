import React from 'react'

export default function Navbar() {
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
      <button className="btn btn-outline-info" style={{
        backgroundColor: "#143D5C",
        color: "white"
      }}>Log Out</button>
     </nav>
    </>
  )
}
