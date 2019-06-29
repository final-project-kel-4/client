import React, { useState } from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import styled, { keyframes } from "styled-components";
import { slideInRight, slideOutRight } from "react-animations";
import axios from "axios";
import swal from "sweetalert";

const slideRightAnimation = keyframes`${slideInRight}`;
const slideOutRightAnimation = keyframes`${slideOutRight}`;
const SlideInRight = styled.div`
  animation: 0.5s ${slideRightAnimation};
`;
const SlideOutRight = styled.div`
  animation: 0.5s ${slideOutRightAnimation};
`;

export default function RegisterForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsRegistring } = props.registring;
  const { isNavigatingToLogin, setIsNavigatingToLogin } = props.navigations;
  const navigator = e => {
    if (e) e.preventDefault();
    setIsNavigatingToLogin(true);
    setTimeout(
      function() {
        setIsRegistring(false);
        setIsNavigatingToLogin(false);
      }.bind(this),
      300
    );
  };

  function reset() {
    setName("");
    setEmail("");
    setPassword("");
  }

  function register(e) {
    if (e) {
      e.preventDefault();
    }

    if (name && email && password) {
      axios
        .post(`http://localhost:3000/user/signup`, { name, email, password })
        .then(() => {
          swal("Signup success", "Now you may log in", "success");
          reset();
          navigator();
        })
        .catch(err => {
          console.log(err);
          swal("Please try again", "", "warning");
        });
    } else {
      swal("Please complete the form", "", "warning");
    }
  }

  return (
    <>
      {!isNavigatingToLogin ? (
        <form onSubmit={register}>
          <SlideInRight>
            <div
              style={{
                backgroundColor: "#EFF2F5",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                paddingTop: "18px",
                width: "400px"
              }}
              className="row px-3"
            >
              <div className="col col-md-2">
                <FiUser
                  style={{
                    fontSize: "33px",
                    color: "grey"
                  }}
                />
              </div>
              <div className="col col-md-10">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    aria-describedby="emailHelp"
                    placeholder="Your Name Here"
                    style={{
                      width: "250px"
                    }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#EFF2F5",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                paddingTop: "18px",
                width: "400px"
              }}
              className="row px-3"
            >
              <div className="col col-md-2">
                <FiMail
                  style={{
                    fontSize: "33px",
                    color: "grey"
                  }}
                />
              </div>
              <div className="col col-md-10">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    aria-describedby="emailHelp"
                    placeholder="Enter email to register"
                    style={{
                      width: "250px"
                    }}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div
              className="row px-3"
              style={{
                backgroundColor: "#EFF2F5",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                paddingBottom: "5px"
              }}
            >
              <div className="col col-md-2">
                <FiLock
                  style={{
                    fontSize: "33px",
                    color: "grey"
                  }}
                />
              </div>
              <div className="cold col-md-10">
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="passwordInput"
                    placeholder="Enter password"
                    style={{
                      width: "250px"
                    }}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </SlideInRight>
          <div
            className="row pt-4"
            style={{
              marginBottom: "20px"
            }}
          >
            <div className="col d-flex justify-content-around">
              <button
                className="btn btn-primary px-4"
                type="submit"
                style={{
                  fontSize: "17px"
                }}
              >
                Register Now!
              </button>
              <button
                className="btn btn-light px-4"
                style={{
                  fontSize: "17px"
                }}
                onClick={navigator}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      ) : (
        <>
          <SlideOutRight>
            <div
              style={{
                backgroundColor: "#EFF2F5",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                paddingTop: "18px",
                width: "400px"
              }}
              className="row px-3"
            >
              <div className="col col-md-2">
                <FiUser
                  style={{
                    fontSize: "33px",
                    color: "grey"
                  }}
                />
              </div>
              <div className="col col-md-10">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    aria-describedby="emailHelp"
                    placeholder="Your Name Here"
                    style={{
                      width: "250px"
                    }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#EFF2F5",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                paddingTop: "18px",
                width: "400px"
              }}
              className="row px-3"
            >
              <div className="col col-md-2">
                <FiMail
                  style={{
                    fontSize: "33px",
                    color: "grey"
                  }}
                />
              </div>
              <div className="col col-md-10">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    aria-describedby="emailHelp"
                    placeholder="Enter email to register"
                    style={{
                      width: "250px"
                    }}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div
              className="row px-3"
              style={{
                backgroundColor: "#EFF2F5",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                paddingBottom: "5px"
              }}
            >
              <div className="col col-md-2">
                <FiLock
                  style={{
                    fontSize: "33px",
                    color: "grey"
                  }}
                />
              </div>
              <div className="cold col-md-10">
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="passwordInput"
                    placeholder="Enter password"
                    style={{
                      width: "250px"
                    }}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </SlideOutRight>
          <div
            className="row pt-4"
            style={{
              marginBottom: "20px"
            }}
          >
            <div className="col d-flex justify-content-around">
              <button
                className="btn btn-primary px-4"
                type="submit"
                style={{
                  fontSize: "17px"
                }}
              >
                Register Now!
              </button>
              <button
                className="btn btn-light px-4"
                style={{
                  fontSize: "17px"
                }}
                onClick={navigator}
              >
                Login
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
