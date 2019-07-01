import React from 'react'
import { FiUserX } from 'react-icons/fi'

export default function CandidateTable(props) {
  const {candidates} = props
  const colorChooser = (number) =>{
    if (number > 19) return "green"
    else if(number > 14) return "black"
    else return "grey"
  }
  const sizeChooser = (number) => {
    if (number > 19) return "23px"
    else if(number > 14) return "20px"
    else return "18px"
  }
  return (
    <div style={{
      overflow: "scroll",
      maxHeight: "60vh"
    }}>
      <div className="table-responsive" style={{
        borderRadius: "12px"
      }}>
        <table className="table table-hover">
          <thead style={{
            backgroundColor: "#9ED6D2"
          }}>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Score</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((el,index)=>{
              return (
                <tr key={index}>
                  <td>{el.name}</td>
                  {el.score > 0 ? <td><p style={{
                    fontWeight: "bold",
                    fontSize: sizeChooser((Number(el.score)* 100).toFixed(2)),
                    color: colorChooser((Number(el.score)* 100).toFixed(2))
                  }}>{(Number(el.score)* 100).toFixed(2)} %</p></td> : <td><p>Not yet calculated</p></td>}
                  <td>
                    <button className="btn btn-sm btn-danger">
                      <FiUserX/>
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
