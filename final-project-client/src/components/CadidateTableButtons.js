import React, { useState } from "react";
import { FiUserX, FiRefreshCw } from "react-icons/fi";
import {TiSocialLinkedin} from 'react-icons/ti'
import { GooSpinner } from "react-spinners-kit";
import swal from 'sweetalert'
export default function CadidateTableButtons(props) {
  const {
    removeCandidate,
    _id,
    refreshCandidate,
    idCandidate,
    linkedinURL
  } = props;
  const [isRefreshing, setIsRefreshing] = useState(false);
  const refresh = () => {
    swal({
      title: "Are you sure to refresh this candidate?",
      text: "It may take a while, because we will be reading it again from the link!",
      icon: "info",
      buttons: true,
      dangerMode: true
    }).then(async confirm => {
      if (confirm) {
        setIsRefreshing(true);
        await refreshCandidate(idCandidate)
        setIsRefreshing(false)
      }
    });
  };
  return (
    <>
      {isRefreshing ? (
        <div className="d-flex justify-content-center">
          <GooSpinner size={50} color="#9ED6D2" />
        </div>
      ) : (
        <>
          <button className="btn btn-sm btn-danger mx-1" onClick={() => removeCandidate(_id)}>
            <FiUserX />
          </button>
          <button
            className="btn btn-sm mx-1 btn-light"
            onClick={refresh}
            style={{
              backgroundColor: "#E6EFF2",
              fontSize: "16px",
              paddingBottom: "6px"
            }}
          >
            <FiRefreshCw/>
            {/* <p style={{
              fontSize: "12px",
              marginBottom: "0",
              paddingTop: "2px"
            }}>Refresh</p> */}
          </button>
          <button className="btn btn-sm btn-light"  style={{
              backgroundColor: "#E6EFF2",
              fontSize: "16px",
              paddingBottom: "6px"
            }}>
            <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
              <TiSocialLinkedin/>
            </a>
          </button>
        </>

      )}
    </>
  );
}
