import React from 'react'
import {FiUserX} from 'react-icons/fi'

export default function CandidateTable(props) {
  const {candidates} = props
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
                  <td>{el.score}</td>
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
