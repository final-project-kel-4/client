import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CandidateForm from "../components/CandidateForm";
import { FiXCircle, FiRefreshCcw } from "react-icons/fi";
import CandidateTable from "../components/CandidateTable";
import { GooSpinner } from "react-spinners-kit"

export default function JobDetail({ match }) {
  const [fileInput, setFileInput] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [candidates, setCandidates] = useState([
    {
      name: "Robby Chaesar Putra",
      score: "99"
    },
    {
      name: "Fahmi Nugra Sutansyah",
      score: "88"
    },
    {
      name: "Rubhi Aulia",
      score: "110"
    }
  ]);
  const inputingFile = () => {
    setFileInput(!fileInput);
  };
  const submitFile = (e)=>{
    if(e) e.preventDefault()
  }
  const refresh = (e) =>{
    if (e) e.preventDefault()
    setIsRefreshing(true)
    setTimeout(
      function() {
        setIsRefreshing(false);
      }.bind(this),
      5000
    );
  }
  const [data, setData] = useState({
    jobDesk: "Intern Web Developer",
    company: "Hacktiv8 Indonesia",
    image:
      "https://media.licdn.com/dms/image/C560BAQGN_K0pLI09-w/company-logo_400_400/0?e=1570060800&v=beta&t=dGtbEdJVsW75mMSA0cQVf7V_MEWnHaqkRQ0CJzwesh0",
    address: "Jakarta Selatan, DKI Jakarta"
  });
  return (
    <>
      <div className="container">
        <div className="row pt-4">
          <div className="col col-md-5">
            <div className="d-flex justify-content-center mb-3">
              <img
                src={data.image}
                style={{
                  height: "10vh",
                  width: "10vh"
                }}
              />
            </div>
            <h4 className="text-center">{data.jobDesk}</h4>
            <h5 className="text-center">{data.company}</h5>
            <h6 className="text-center text-muted">{data.address}</h6>
            <div className="d-flex justify-content-center mt-3">
              <button className="btn btn-outline-danger">
                <FiXCircle
                  style={{
                    fontSize: "25px"
                  }}
                />{" "}
                Delete job
              </button>
            </div>
            {fileInput ? (
              <>
                <div className="pt-3">
                  <form onSubmit={submitFile}>
                    <div className="form-group">
                      <label for="fileInput">.TXT or .DOCS file:</label>
                      <input
                        type="file"
                        className="form-control-file"
                        id="fileInput"
                        aria-describedby="fileInputHelp"
                      />
                      <small
                        className="form-text pt-4"
                        style={{
                          fontSize: "18px"
                        }}
                      >
                        IMPORTANT!!!!
                      </small>
                      <small
                        className="form-text"
                        style={{
                          fontSize: "14px"
                        }}
                      >
                        {`Your links in the docs also need to be separated by <ENTER> key.`}{" "}
                      </small>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-secondary" style={{
                        backgroundColor: "#143D5C",
                        color: "white"
                      }}
                      type="submit"
                      >Submit!</button>
                    </div>
                  </form>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <button
                    className="btn btn-outline-dark"
                    onClick={inputingFile}
                  >
                    Text Input
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="pt-3">
                  <CandidateForm />
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <button
                    className="btn btn-outline-dark"
                    onClick={inputingFile}
                  >
                    File Input
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="col col-md-7">
            <div className="d-flex justify-content-center flex-column">
              <h3 className="mb-4">Candidates:</h3>
              <CandidateTable candidates={candidates}/>
              <div className="d-flex justify-content-around pt-4">
              {isRefreshing ? <GooSpinner size={70} color="#9ED6D2"/> : 
              <button className="btn" style={{
                backgroundColor: '#9ED6D2',
                fontSize: "16px",
                paddingBottom: "9px"
              }}
              onClick={refresh}><FiRefreshCcw/> Refresh List</button>
            }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
