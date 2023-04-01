import React from "react";

import { CSSProperties, useState } from "react";

import axios from "axios";
import { SpinnerCircularFixed } from "spinners-react";


import { useRef } from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";

const SignIn = (props) => {
  const userDataHandler = props.userDataHandler;
  const isLoggedInHandler = props.isLoggedInHandler;
  const cartFromServer = props.cartFromServer;
  let navbar_closer = props.navbar_closer;

 

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  let signInSender = async () => {
    setLoading(true);
    let email = emailRef.current.value;
    let password = passwordRef.current.value;

    //console.log(email, password);

    let loginInfo = {
      email,
      password,
    };

    let feedback = axios
      .post("/sign_in", loginInfo)
      .then((res) => {
        // Work with the response...
        // console.log(res);

        let response_code = res.data.code;
        let user_data = res.data.data;

        //console.log(response_code);
        if (response_code === "Login-success") {
          setLoading(false);
          isLoggedInHandler();
          //console.log(user_data);
          userDataHandler(user_data);
          // if (user_data.cart_data) {
          //   setLoading(false);
          //   cartFromServer(user_data.cart_data);
          // }
          // window.location.href = "http://localhost:3000";

          const checkoutUrl = localStorage.getItem('checkoutUrl');

          if (checkoutUrl) {
            return navigate("/cart");
          }
          navigate("/");
        }
        if (response_code === "Wrong-details") {
          setLoading(false);
          setMessage("Invalid login details");
        }
      })
      .catch((err) => {
        // Handle error
        //console.log(err);
      });
    //console.log(feedback);
    //console.log(feedback.data);

    if (feedback) {
      userDataHandler();
    }

    // emailRef.current.value = "";
    // passwordRef.current.value = "";
  };

  return (
    <div onClick={navbar_closer}>
      <div className="login-page">
        <div className="form">
          <div>{message}</div>
          <input type="email" placeholder="E-mail" ref={emailRef} />
          <input type="password" placeholder="Password" ref={passwordRef} />
          <button type="button" onClick={signInSender}>
            Login
          </button>
          <p className="message">
            Not registered?
            <Link to="/register" className="click" id="register">
              {" "}
              Create an account
            </Link>
          </p>
          <p className="message">
            <Link to="/forgot-password" className="click" id="register">
              {" "}
              Forgot Password?
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

export default SignIn;
