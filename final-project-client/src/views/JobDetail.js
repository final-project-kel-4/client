import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
import CandidateForm from "../components/CandidateForm";
import {
  FiXCircle,
  FiRefreshCcw,
  FiHome,
  FiTrendingUp,
  FiTrendingDown
} from "react-icons/fi";
import CandidateTable from "../components/CandidateTable";
import { GooSpinner } from "react-spinners-kit";
import axios from "axios";
import swal from "sweetalert";

const sortDescendingScore = inputArray => {
  inputArray.sort((a, b) => {
    if (a.score < b.score) return 1;
    else if (a.score > b.score) return -1;
    else return 0;
  });

  return inputArray;
};
const sortAscendingScore = inputArray => {
  inputArray.sort((a, b) => {
    if (a.score < b.score) return -1;
    else if (a.score > b.score) return 1;
    else return 0;
  });
  return inputArray;
};
export default function JobDetail({ match, history }) {
  const [data, setData] = useState({ company: {} });
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isDescending, setIsDescending] = useState(true);
  const [candidates, setCandidates] = useState([]);
  const sort = () => {
    if (isDescending) {
      setIsDescending(false);
      setCandidates(sortAscendingScore(candidates));
    } else if (!isDescending) {
      setIsDescending(true);
      setCandidates(sortDescendingScore(candidates));
    }
  };
  const refresh = async e => {
    let comparison;
    if (e) e.preventDefault();
    setIsRefreshing(true);
    try {
      comparison = await axios.get(
        `http://localhost:3000/match/${data.matching}/refresh`,
        { headers: { authorization: localStorage.getItem("token") } }
      );
      let result = [];

      sortDescendingScore(comparison.data.items);
      result = comparison.data.items.map(item => {
        return {
          _id: item._id,
          idCandidate: item.candidate._id,
          name: item.candidate.name,
          score: item.score
        };
      });
      setCandidates(result);
    } catch (err) {
      console.log(err);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/job/${match.params.id}`, {
        headers: { authorization: localStorage.getItem("token") }
      })
      .then(async ({ data }) => {
        setData(data);
        let matching = await axios.get(
          `http://localhost:3000/match/${data.matching}`,
          { headers: { authorization: localStorage.getItem("token") } }
        );
        
        sortDescendingScore(matching.data.items);
        setCandidates(
          matching.data.items.map(x => {
            return {
              name: x.candidate.name,
              score: x.score,
              _id: x._id,
              idCandidate: x.candidate._id,
              scoreDetails: x.scoreDetails
            };
          })
        );
      });
  }, [match.params.id]);

  function removeJob() {
    swal({
      title: "Are you sure?",
      text: `Delete ${data.title}?`,
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        axios
          .delete(`http://localhost:3000/job/${match.params.id}`, {
            headers: { authorization: localStorage.getItem("token") }
          })
          .then(() => {
            swal("Remove job success", "", "success");
            history.push("/");
          });
      }
    });
  }

  function onAddCandidate(result) {
    sortDescendingScore(result.items);
    let list = result.items.map(x => {
      return { ...x, name: x.candidate.name };
    });
    setCandidates(list);
    setIsDescending(true);
  }

  function removeCandidate(id) {
    axios
      .delete(`http://localhost:3000/matchItem/${id}`, {
        headers: { authorization: localStorage.getItem("token") }
      })
      .then(() => {
        refresh();
      });
    // .
  }

  function refreshAll() {
    refresh();
  }

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row pt-4">
          <div className="col col-md-5">
            <div className="d-flex justify-content-center mb-3">
              <img
                alt="Not found"
                src={data.company.logo}
                style={{
                  height: "10vh",
                  width: "10vh"
                }}
              />
            </div>
            <h4 className="text-center">{data.title}</h4>
            <h5 className="text-center">{data.company.name}</h5>
            <h6 className="text-center text-muted">{data.company.address}</h6>
            <div className="d-flex justify-content-center mt-3 mb-1">
              <button className="btn btn-outline-danger" onClick={removeJob}>
                <FiXCircle
                  style={{
                    fontSize: "25px"
                  }}
                />{" "}
                Delete job
              </button>
            </div>
            {/* description =========================== */}
            <div className="description mt-3" style={{
              height: "47vh",
              overflow:"scroll",
            }}>
              <div dangerouslySetInnerHTML={{__html: data.rawHtml}}/>
            </div>

          </div>
          <div className="col col-md-7">
            <div className="d-flex justify-content-center flex-column container-fluid">
              <h3 className="mb-4">Candidates:</h3>
              <div className="row">
                <div className="col col-md-11 d-flex flex-column">
                  <CandidateTable
                    candidates={candidates}
                    removeCandidate={removeCandidate}
                    refreshAll={refreshAll}
                    isRefreshing={isRefreshing}
                  />
                </div>
                <div className="col col-md-1">
                  {isDescending ? (
                    <button
                      className="btn btn-secondary"
                      style={{
                        backgroundColor: "#143D5C",
                        fontSize: "17px",
                        paddingBottom: "9px"
                      }}
                      onClick={sort}
                    >
                      <FiTrendingUp />
                    </button>
                  ) : (
                    <button
                      className="btn btn-secondary"
                      style={{
                        backgroundColor: "#143D5C",
                        fontSize: "17px",
                        paddingBottom: "9px"
                      }}
                      onClick={sort}
                    >
                      <FiTrendingDown />
                    </button>
                  )}
                  {/* button refresh all ================= */}
                  <button
                    className="btn btn-secondary"
                    style={{
                      backgroundColor: "#143D5C",
                      fontSize: "9px",
                      paddingBottom: "9px"
                    }}
                  >
                    Refresh all
                  </button>
                </div>
              </div>

              <div className="d-flex justify-content-around pt-4">
                {isRefreshing ? (
                  <GooSpinner size={70} color="#9ED6D2" />
                ) : (
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#9ED6D2",
                      fontSize: "16px",
                      paddingBottom: "9px"
                    }}
                    onClick={refresh}
                  >
                    <FiRefreshCcw /> Calculate!
                  </button>
                )}
                <Link to="/">
                  <button
                    className="btn btn-secondary"
                    style={{
                      backgroundColor: "#143D5C",
                      color: "white"
                    }}
                  >
                    <FiHome
                      style={{
                        fontSize: "20px",
                        paddingBottom: "3px"
                      }}
                    />{" "}
                    Back To Home
                  </button>
                </Link>
              </div>
              <div className="pt-2 pl-1">
                <CandidateForm
                  idJob={match.params.id}
                  onAddCandidate={data => {
                    onAddCandidate(data);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
