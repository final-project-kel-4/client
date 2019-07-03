import React, {useEffect} from "react";
import { connect } from "react-redux";
import { setLogin } from "../store/action";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import LoginForm from "../components/LoginForm";
import "../css/Login.css";

const fadeInAnimation = keyframes`${fadeIn}`;
const FadeIn = styled.div`
  animation: 2s ${fadeInAnimation};
`;

function Login(props) {
  const { statusLogin } = props;
  useEffect(()=>{
    if(localStorage.token) props.history.push('/')
  },[])
  return (
    <>
      <div
        style={{
          height: "100vh",
          backgroundColor: "white"
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col col-md-5"
              style={{
                paddingTop: "12vh"
              }}
            >
              <FadeIn className="row d-flex justify-content-center mb-3">
                <img
                  src="https://i.imgur.com/f1Ir6K0.png"
                  alt="Not found"
                  style={{
                    width: "200px",
                    borderRadius: "50px",
                    marginBottom: "-1vh"
                  }}
                />
              </FadeIn>
              <FadeIn
                className="row d-flex justify-content-center flex-column"
                style={{
                  marginBottom: "2vh"
                }}
              >
                <h2 className="text-center">Welcome To matchIn</h2>
                <h6 className="text-center">Resourcing human, now easier.</h6>
              </FadeIn>
              <div className="row d-flex justify-content-center">
                <LoginForm />
              </div>
            </div>
            <FadeIn className="col col-md-6">
              <img
                src="https://i.imgur.com/HrFaV3Q.jpg"
                alt={<h1>image not found</h1>}
                style={{
                  height: "720px",
                  width: "720px",
                  paddingBottom: "50px"
                }}
              />
            </FadeIn>
          </div>
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

const mapDispatchToProps = {
  setLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
