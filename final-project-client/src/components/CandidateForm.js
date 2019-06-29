import React, { useState } from "react";
import { shake } from "react-animations";
import styled, { keyframes } from "styled-components";
const shakeAnimation = keyframes`${shake}`;
const Shake = styled.div`
  animation: 2s ${shakeAnimation};
`;

export default function CandidateForm() {
  const [isShaking, setIsShaking] = useState(false);
  const submit = e => {
    if (e) e.preventDefault();
  };
  const shakeIt = () => {
    setIsShaking(true);
    setTimeout(
      function() {
        setIsShaking(false);
      },
      2000
    );
  };
  return (
    <>
      <form onSubmit={submit}>
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
            rows="6"
            aria-describedby="inputHelp"
            onFocus={shakeIt}
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
      </form>
    </>
  );
}
