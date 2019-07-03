import React, { useState } from "react";
import { shake } from "react-animations";
import styled, { keyframes } from "styled-components";
import { RotateSpinner } from "react-spinners-kit";
import axios from "axios";
import swal from "sweetalert";

const shakeAnimation = keyframes`${shake}`;
const Shake = styled.div`
  animation: 2s ${shakeAnimation};
`;

export default function CandidateForm(props) {
  const [isShaking, setIsShaking] = useState(false);
  const [inputCandidate, setInputCandidate] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);
  const submit = e => {
    if (e) e.preventDefault();
    if (inputCandidate) {
      setIsSubmiting(true);
      axios
        .post(
          `http://localhost:3000/job/addCandidate`,
          { linkedin: inputCandidate, jobId: props.idJob },
          { headers: { authorization: localStorage.getItem("token") } }
        )
        .then(({ data }) => {
          setIsSubmiting(false);
          props.onAddCandidate(data);
          setInputCandidate("");
        })
        .catch(err => {
          console.log(err);
          props.onAddCandidate(null);
          setIsSubmiting(true);
        });
    } else swal("Please fill the form!", "", "warning");
  };
  const shakeIt = () => {
    setIsShaking(true);
    setTimeout(function() {
      setIsShaking(false);
    }, 2000);
  };

  return (
    <>
      {isSubmiting ? (
        <div className="d-flex justify-content-center mt-4">
          <RotateSpinner size={50} color="#143D5C" />
        </div>
      ) : (
        <form onSubmit={submit}>
          <div className="row">
            <div className="col col-md-9">
              <div className="form-group">
                <label
                  htmlFor="candidateLinkInput"
                  style={{
                    fontSize: "20px"
                  }}
                >
                  Candidate Link Input:
                </label>
                <textarea
                  className="form-control"
                  id="candidateLinkInput"
                  rows="3"
                  aria-describedby="inputHelp"
                  onFocus={shakeIt}
                  value={inputCandidate}
                  onChange={e => setInputCandidate(e.target.value)}
                />
                {isShaking ? (
                  <Shake>
                    <small
                      className="form-text"
                      style={{
                        fontSize: "18px",
                        color: "red"
                      }}
                    >
                      IMPORTANT!!
                    </small>
                  </Shake>
                ) : (
                  <small
                    className="form-text"
                    style={{
                      fontSize: "18px"
                    }}
                  >
                    IMPORTANT!!
                  </small>
                )}

                <small
                  id="inputHelp"
                  className="form-text text-muted"
                  style={{
                    fontSize: "16px"
                  }}
                >{`You have to separate the links with <ENTER> key!`}</small>
              </div>
            </div>
            <div className="col col-md-3 d-flex align-items-center">
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-secondary"
                  style={{
                    backgroundColor: "#143D5C",
                    color: "white"
                  }}
                  type="submit"
                >
                  Submit!
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
}
