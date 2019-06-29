import React from 'react'

export default function HomeJobCard(props) {
  const {image, jobDesk, company} = props.data
  return (
    <div className='card' style={{
      height: "19rem",
      borderRadius: "10px",
      width: "11rem"
    }}>
      <img className="card-img-top" src={image} alt={"Not found"} style={{
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        height: "10"
      }}/>
      <div className="card-body">
        <h5 style={{
          fontSize: "18px"
        }}>{jobDesk}</h5>
        <p style={{
          fontSize: "14px"
        }} className="text-muted">{company}</p>
      </div>
    </div>
  )
}
