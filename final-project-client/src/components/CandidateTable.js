import React from "react";
import axios from "axios";
import CandidateTableButtons from "./CadidateTableButtons";

export default function CandidateTable(props) {
  const { candidates } = props;
  const colorChooser = number => {
    if (number > 19) return "green";
    else if (number > 14) return "black";
    else return "grey";
  };
  const sizeChooser = number => {
    if (number > 19) return "23px";
    else if (number > 14) return "20px";
    else return "18px";
  };

  async function refreshCandidate(id) {
    await axios.get(`http://localhost:3000/candidate/${id}/refresh`, {
      headers: { authorization: localStorage.getItem("token") }
    });

    props.refreshAll();
  }
  return (
    <div
      style={{
        overflow: "scroll",
        maxHeight: "40vh"
        // height: "40vh"
      }}
    >
      <div
        className="table-responsive"
        style={{
          borderRadius: "12px"
        }}
      >
        <table className="table table-hover">
          <thead
            style={{
              backgroundColor: "#9ED6D2"
            }}
          >
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Score</th>
              <th scope="col" colSpan="2" style={{textAlign: "center"}}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((el, index) => {
              return (
                <tr key={index}>
                  <td>{el.name}</td>
                  {el.score > 0 ? (
                    <td>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: sizeChooser(
                            (Number(el.score) * 100).toFixed(2)
                          ),
                          color: colorChooser(
                            (Number(el.score) * 100).toFixed(2)
                          )
                        }}
                      >
                        {(Number(el.score) * 100).toFixed(2)} %
                      </p>
                    </td>
                  ) : (
                    <td>
                      <p>Not yet calculated</p>
                    </td>
                  )}
                  <td className="text-center" style={{
                    paddingBottom: "-0.5rem"
                  }}>
                      <CandidateTableButtons
                        removeCandidate={props.removeCandidate}
                        _id={el._id}
                        refreshCandidate={refreshCandidate}
                        idCandidate={el.idCandidate}
                      />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
