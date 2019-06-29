import React from "react";
import { StageSpinner } from "react-spinners-kit";

export default function JobLinkForm(props) {
  const { isLoading, setIsLoading } = props.isLoading;
  const { linkInput, setLinkInput } = props.linkInput
  const loading = e => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(
      function() {
        setIsLoading(false);
        setLinkInput('')
      }.bind(this),
      2000
    );
  };
  return (
    <div
      style={{
        width: "50vh"
      }}
    >
      <form onSubmit={loading}>
        <div className="form-group">
          <h2 className="text-center pb-2">LinkedIn Link: </h2>
          {isLoading ? (
            <div className="d-flex justify-content-center">
              <StageSpinner size={45} color="#9ED6D2" />
            </div>
          ) : (
            <input
              type="text"
              className="form-control"
              id="linkInput"
              placeholder="Enter LinkedIn link"
              value={linkInput}
              onChange={e=>{
                setLinkInput(e.target.value)
              }}
            />
          )}
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-secondary"
            style={{
              fontSize: "20px",
              backgroundColor: '#143D5C'
            }}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
