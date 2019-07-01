import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import JobLinkForm from "../components/JobLinkForm";
import HomeJobCard from "../components/HomeJobCard";
import { connect } from "react-redux";
import Navbar from '../components/Navbar'
import axios from 'axios';

function Home(props) {
  const { statusLogin } = props;
  const [jobData, setJobData] = useState([]);

  const [isInputLoading, setIsInputLoading] = useState(false);
  const [linkInput, setLinkInput] = useState("");

  function fetchData(){
    console.log('fetching jobs...')
    axios.get(`http://localhost:3000/job`, {headers:{'authorization':localStorage.getItem('token')}})
    .then(({data})=>{
      console.log(data);
      setJobData(data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    fetchData()
  }, [isInputLoading])

  return (
    <>
      {statusLogin ? (
        <div>
          <Navbar/>
          <div className="container">
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
              />
            </div>
            <div className="row pt-4 d-flex justify-content-center">
              {jobData.map((el, index) => {
                return (
                  <Link to={`/job/${el._id}`} style={{
                    color: 'black',
                    textDecorationColor: "#143D5C"
                    
                  }} key={index}>
                    <div className="col col-sm-12 mb-3" >
                    <HomeJobCard data={el} key={index} />
                  </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    statusLogin: state.isLogin
  };
};

export default connect(mapStateToProps)(Home);
