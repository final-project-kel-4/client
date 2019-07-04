import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JobLinkForm from "../components/JobLinkForm";
import HomeJobCard from "../components/HomeJobCard";
import styled, { keyframes } from 'styled-components';
import { flash } from 'react-animations';
import { connect } from "react-redux";
import { ClapSpinner } from "react-spinners-kit"
import Navbar from "../components/Navbar";
import axios from "axios";

const flashAnimation = keyframes`${flash}`;
const FlashingDiv = styled.div`
  animation: 2s ${flashAnimation};
`
 
function Home(props) {
  const {statusLogin} = props;
  const [jobData, setJobData] = useState([]);
  const [isInputLoading, setIsInputLoading] = useState(false);
  const [linkInput, setLinkInput] = useState("");

  function onAddDone(data) {
    setJobData([data,...jobData])
  }

  function fetchData() {
    console.log("fetching jobs...");
    axios
      .get(`http://104.154.229.98/job`, {
        headers: { authorization: localStorage.getItem("token") }
      })
      .then(({ data }) => {
        setJobData(data);
      });
  }

  useEffect(() => {
    if(!statusLogin) props.history.push("/login")
    else fetchData();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <div className="container d-flex flex-column">
          <div
            className="row d-flex justify-content-center"
            style={{
              paddingTop: "8vh"
            }}
          >
            <JobLinkForm
              isLoading={{
                isLoading: isInputLoading,
                setIsLoading: setIsInputLoading
              }}
              linkInput={{ linkInput, setLinkInput }}
              onAddDone={onAddDone}
            />
          </div>
          { jobData.length > 0 ? <div className="row pt-4 d-flex justify-content-center">
            {jobData.map((el, index) => {
              return (
                <Link
                  to={`/job/${el._id}`}
                  style={{
                    color: "black",
                    textDecorationColor: "#143D5C"
                  }}
                  key={index}
                >
                  <div className="col col-sm-12 mb-3">
                    <HomeJobCard data={el} key={index} />
                  </div>
                </Link>
              );
            })}
          </div> : 
          <div className="d-flex flex-column" style={{
            paddingTop: "10vh"
          }}>
            <div className="d-flex justify-content-center">
              <ClapSpinner size={70} frontColor="#9ED6D2" backColor="#143D5C"/>
            </div>
            <FlashingDiv>
              <h2 className="text-center pt-4">Loading your jobs...</h2>
            </FlashingDiv>
          </div>
        }
          
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    statusLogin: state.isLogin
  };
};

export default connect(mapStateToProps)(Home);
