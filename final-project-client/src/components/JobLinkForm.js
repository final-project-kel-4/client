import React from "react";
import { StageSpinner } from "react-spinners-kit";
import axios from 'axios';
import swal from 'sweetalert'

export default function JobLinkForm(props) {
  const { isLoading, setIsLoading } = props.isLoading;
  const { linkInput, setLinkInput } = props.linkInput
  const submit = e => {
    if (e)e.preventDefault();
    if(linkInput){
      setIsLoading(true);

      axios.post(`http://localhost:3000/job`, {linkedin:linkInput}, {headers:{'authorization':localStorage.getItem('token')}})
      .then(({ data })=>{
        setIsLoading(false);
        setLinkInput('')
        props.onAddDone(data)
      })
      .catch(err=>{
        swal("Error Occured", "You did not input a valid LinkeIn link.","error")
        setIsLoading(false)
      })
    }
    else swal('Please fill up the form', '', 'warning')
    
  };
  
  return (
    <div
      style={{
        width: "50vh"
      }}
    >
      <form onSubmit={submit}>
        <div className="form-group">
          <h2 className="text-center pb-2">LinkedIn Job Link: </h2>
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
