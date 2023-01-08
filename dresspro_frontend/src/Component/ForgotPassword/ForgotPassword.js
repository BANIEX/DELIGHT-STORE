import React from "react";

import {useState } from "react";

import axios from "axios";
import { SpinnerCircularFixed } from "spinners-react";

import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = (props) => {
  let navbar_closer = props.navbar_closer;

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const emailRef = useRef(null);

  let emailSender = async () => {
    setLoading(true);
    let email = emailRef.current.value;

    //console.log(email, password);

    let emailInfo = {
      email,
    };

    let feedback = axios
      .post("/forgot_password", emailInfo)
      .then((res) => {
        // Work with the response...
        // console.log(res);

        let response_code = res.data.code;

        //console.log(response_code);
        if (response_code === "Reset-mail-sent") {
          setLoading(false);
          setMessage("Reset Password Link has been sent to your mail");

          //console.log(user_data);
          
          // window.location.href = "http://localhost:3000";
          // navigate("/");
        }
        if (response_code === "Invalid-email") {
          setLoading(false);
          setMessage("User does not exist");
        }
      })
      .catch((err) => {
        // Handle error
        //console.log(err);
      });

  };

  return (
    <div onClick={navbar_closer}>
      <div className="login-page">
        <div className="form">
          <div>{message}</div>
          <input type="email" placeholder="E-mail" ref={emailRef} />
          <button type="button" onClick={emailSender}>
            Reset Password
          </button>
          <p className="message">
            Back to
            <Link to="/sign_in" className="click" id="register">
              {" "}
              Sign In
            </Link>
          </p>
          
          <SpinnerCircularFixed
            size={20}
            enabled={loading}
            color="rgb(15,173,183)"
            secondaryColor="white"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
