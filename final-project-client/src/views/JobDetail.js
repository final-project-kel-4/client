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
  const [description, setDescription] = useState("<p>Supporting and developing a digital solution based on .NET applications and SharePoint O365, the primary responsibility of the candidate will include being able to design and build applications and to coordinate with the rest of the teams working on different IT projects. The candidate should display a high degree of adaptability to learn new technologies as needed and successfully manage the daily challenges of a technical environment.<br>      <strong><br></strong> </p><p><strong>Roles &amp; Responsibilities</strong><br> </p><ul><ul><li>Work with project team members to design, develop and test the.NET web applications or appropriate digital solutions. </li><li>Meet end users to collect functional and technical requirements. Translate application storyboards and use cases into practical applications. </li><li>Design, build and maintain efficient, reusable, and reliable programming code </li><li>Ensure the best possible performance, quality, and responsiveness of applications </li><li>Review or evaluate third-party software solutions as and when required </li><li>Present ideas for system improvements, including cost proposals </li><li>Produce detailed requirement and technical specifications and writing the programme codes </li><li>Provide 2nd level support for internal stakeholder on application features, enhancements and bug fixes </li></ul></ul><p>&nbsp; </p><p><strong>Job Requirements</strong> </p><ul><ul><li>A bachelor's degree in computer science, computer engineering, or a related discipline is required to work as a technical lead. </li><li>Minimum 8 years of technical experience in ASP .NET application development. </li><li>Strong knowledge of Microsoft SharePoint O365 / 2013, ASP.Net, HTML/HTML5, CSS/CSS3, and JavaScript, JQuery, Visual Studio or related IDE. </li><li>Proficient in C# or VB.Net, with a good knowledge of their ecosystems. </li><li>Familiarity in SharePoint O365 features such as PowerApps (formerly MS InfoPath) and Microsoft Flow (formerly MS SharePoint Designer). </li><li>Familiarity with Microsoft SQL Server 2000/2008/2012, SQL Reporting Services, and applicable report generation tool kits. </li><li>Understand the concept of responsive vs adaptive design, and the constraint/implications to multiple target devices such as mobile and large screen and browser-specific compatibility issues. </li><li>Understanding of other technology best practices, frameworks, security standards or methodologies is an advantage. </li><li>Experience in software development lifecycle (“SDLC”). </li><li>Knowledge in Hybrid or Native Mobile Apps development platforms such as Microsoft Xamarin will be an advantage. </li><li>Knowledge in Robotic Process Automation (“RPA”) tools will be an advantage. </li><li>Knowledge in Tableau will be an advantage. </li><li>Excellent communication skills, teamwork and good learning attitude. </li></ul></ul>  <p>&nbsp; </p><p><br> </p><p> <em>We regret to inform that only shortlisted candidates will be contacted.</em></p>")

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
      console.log("done refreshing");
      setCandidates(result);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("ganti refreshing parent");
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
              idCandidate: x.candidate._id
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
              height: "43vh",
              overflow:"scroll",
            }}>
              <div dangerouslySetInnerHTML={{__html: description}}/>
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
                  {/* button refresh all */}
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
