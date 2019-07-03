import React from "react";
import axios from "axios";
import CandidateTableButtons from "./CadidateTableButtons";
import { OverlayTrigger } from 'react-bootstrap';

export default function CandidateTable(props) {
  const { candidates } = props;
  const colorChooser = number => {
    if (number >= 50) return "green";
    else if (number > 20) return "black";
    else return "grey";
  };
  const sizeChooser = number => {
    if (number >= 50) return "23px";
    else if (number > 20) return "20px";
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
        // maxHeight: "40vh"
        height: "40vh"
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
                      <OverlayTrigger
                        placement="right-end"
                        delay={{ show: 100, hide: 200 }}
                        overlay={(<div style={{
                          backgroundColor: "#e4eff2",
                          borderRadius: "5px"
                        }} className="d-flex justify-content-start flex-column px-1">
                          <table className="table table-borderless table-responsive">
                            <thead>
                              <tr>
                                <th scope="col">Area</th>
                                <th scope="cole">Score</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">Experience</th>
                                <td align="right">{(Number(el.scoreDetails.experience) * 100).toFixed(2)}</td>
                              </tr>
                              <tr>
                                <th scope="row">Skills</th>
                                <td align="right">{(Number(el.scoreDetails.skill) * 100).toFixed(2)}</td>
                              </tr>
                              <tr>
                                <th scope="row">Current Position</th>
                                <td align="right">{(Number(el.scoreDetails.currentPosition) * 100).toFixed(2)}</td>
                              </tr>
                              <tr>
                                <th scope="row">Education</th>
                                <td align="right">{(Number(el.scoreDetails.educations) * 100).toFixed(2)}</td>
                              </tr>
                              <tr>
                                <th scope="row">About</th>
                                <td align="right">{(Number(el.scoreDetails.about) * 100).toFixed(2)}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>)}
                      >
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

                      </OverlayTrigger>
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
                        name={el.name}
                        linkedinURL={el.linkedinURL}
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
