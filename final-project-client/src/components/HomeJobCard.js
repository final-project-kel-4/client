import React from 'react'

export default function HomeJobCard(props) {
  const {company, title} = props.data
  return (
    <div className='card job-card' style={{
      height: "21rem",
      borderRadius: "10px",
      width: "11rem"
    }}>
      <img className="card-img-top" src={company.logo} alt={"Not found"} style={{
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        height: "10"
      }}/>
      <div className="card-body">
        <div style={{
          height: "86px",
          overflow: "hidden"
        }}>
        <h5 style={{
          fontSize: "18px"
        }}>{title}</h5>
        </div>
        <br/>
        <p style={{
          fontSize: "14px"
        }} className="text-muted">{company.name}</p>
      </div>
    </div>
  )
}
