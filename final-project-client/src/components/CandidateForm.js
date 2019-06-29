import React from "react";

export default function CandidateForm() {
  const submit = (e)=>{
    if(e) e.preventDefault()
  }
  return (
    <>
      <form onSubmit={submit}>
        <div class="form-group">
          <label for="candidateLinkInput" style={{
            fontSize: "20px"
          }}>Candidate Link Input:</label>
          <textarea
            class="form-control"
            id="candidateLinkInput"
            rows="6"
            aria-describedby="inputHelp"
          />
          <small className="form-text" style={{
            fontSize: "16px"
          }}>IMPORTANT!!</small>
          <small id="inputHelp" className="form-text text-muted" style={{
            fontSize: "14px"
          }}>{`You have to separate the links with <ENTER> key!`}</small>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-secondary" style={{
            backgroundColor: '#143D5C',
            color: "white"
          }}
          type="submit"
          >Submit!</button>
        </div>
      </form>
    </>
  );
}
