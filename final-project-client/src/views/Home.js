import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import JobLinkForm from "../components/JobLinkForm";
import HomeJobCard from "../components/HomeJobCard";
import { connect } from "react-redux";

function Home(props) {
  const { statusLogin } = props;
  const [jobData, setJobData] = useState([
    {
      jobDesk: "Intern Web Developer",
      company: "Hacktiv8",
      image:
        "https://media.licdn.com/dms/image/C560BAQGN_K0pLI09-w/company-logo_400_400/0?e=1570060800&v=beta&t=dGtbEdJVsW75mMSA0cQVf7V_MEWnHaqkRQ0CJzwesh0"
    },
    {
      jobDesk: "JavaScript Developer",
      company: "PT.Telkom Indonesia",
      image:
        "https://media.licdn.com/dms/image/C560BAQEAORMVPbGjQw/company-logo_100_100/0?e=1570060800&v=beta&t=2pP_yHwZPtmUjmynjPVs4xyoVw5_8r8qo0C5lYQKq4A"
    },
    {
      jobDesk: "Front End Developer",
      company: "RebelWorks",
      image:
        "https://media.licdn.com/dms/image/C510BAQFwga3eyy_uzA/company-logo_400_400/0?e=1570060800&v=beta&t=mLrOsH_7NMpFrIY2JmNDpEg1FYqe-TIUHIDWfGoVaH0"
    },
    {
      jobDesk: "Maintainence Engineer",
      company: "Kanisius",
      image:
        "https://media.licdn.com/dms/image/C4E03AQEATWPfE6xquw/profile-displayphoto-shrink_800_800/0?e=1567036800&v=beta&t=4v273_-zCTas2CqoK2w0WESrcK_MZTmQwhRy2KjJ4wA"
    },
    {
      jobDesk: "Software Engineer",
      company: "PT.Bukalapak",
      image:
        "https://media.licdn.com/dms/image/C510BAQFWM1Z-lJfuDw/company-logo_100_100/0?e=1570060800&v=beta&t=66Cqr80mO2i_YLbx8S84WigTlio18B4JHEaK5RiGTBg"
    },
    {
      jobDesk: "BackEnd Developer",
      company: "PT.Tokopedia",
      image:
        "https://media.licdn.com/dms/image/C560BAQGBRMCEK3Y6vw/company-logo_100_100/0?e=1570060800&v=beta&t=JcA66pFS4nhKALUTzhnjoI5TuRb0XU7RR_KxA8nZs38"
    },
    {
      jobDesk: "BackEnd Developer",
      company: "PT.Traveloka",
      image:
        "https://media.licdn.com/dms/image/C4E0BAQHdyy-UHWGvkA/company-logo_100_100/0?e=1570060800&v=beta&t=ksT0a5kp47BWtPCDWUoVXRZQNjr-FUnL8xVfxHYt6aM"
    }
  ]);
  const [isInputLoading, setIsInputLoading] = useState(false);
  const [linkInput, setLinkInput] = useState("");
  return (
    <>
      {statusLogin ? (
        <div>
          <Navbar />
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
            <div className="row pt-4">
              {jobData.map((el, index) => {
                return (
                  <Link to={`/job/${el.jobDesk}`} style={{
                    color: 'black',
                    textDecorationColor: "#143D5C"
                  }}>
                    <div className="col col-md-2 mb-3" key={index}>
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
