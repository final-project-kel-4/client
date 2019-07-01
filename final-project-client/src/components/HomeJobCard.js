import React from 'react'

export default function HomeJobCard(props) {
  const {company, title} = props.data
  return (
    <div className='card' style={{
      height: "20rem",
      borderRadius: "10px",
      width: "13rem"
    }}>
      <img className="card-img-top" src={company.logo} alt={"Not found"} style={{
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        height: "10"
      }}/>
      <div className="card-body">
        <h5 style={{
          fontSize: "18px"
        }}>{title}</h5>
        <p style={{
          fontSize: "14px"
        }} className="text-muted">{company.name}</p>
      </div>
    </div>
  )
}
