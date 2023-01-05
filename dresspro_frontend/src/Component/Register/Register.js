import React from "react";
import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SpinnerCircularFixed } from "spinners-react";

const Register = (props) => {
  let navbar_closer = props.navbar_closer;


  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const formChecker = () => {
    if (firstNameRef.current.value === "") {
      setMessage("Kindly input your first name");
      setLoading(false);

      return false;
    }
    if (lastNameRef.current.value === "") {
      setMessage("Kindly input your last name");
      setLoading(false);

      return false;
    }
    if (phoneNumberRef.current.value === "") {
      setMessage("Kindly input your phone number");
      setLoading(false);

      return false;
    }
    if (passwordRef.current.value === "") {
      setMessage("Kindly input your password");
      setLoading(false);

      return false;
    }
    if (emailRef.current.value === "") {
      setMessage("Kindly input your email");
      setLoading(false);

      return false;
    }
    if (!validateEmail(emailRef.current.value)) {
      setMessage("Invalid email");
      setLoading(false);

      return false;
    }

    return true;
  };

  const registerSender = () => {
    setLoading(true);
    if (formChecker()) {
      let firstName = firstNameRef.current.value;
      let lastName = lastNameRef.current.value;
      let password = passwordRef.current.value;
      let email = emailRef.current.value;
      let phoneNumber = phoneNumberRef.current.value;

      let registerInfo = {
        firstName,
        lastName,
        password,
        email,
        phoneNumber,
      };

      console.log(firstName, lastName, password, email);

      let feedback = axios
        .post(
          "/register",
          registerInfo
        )
        .then((res) => {
          // Work with the response...
          console.log(res);

          let response_code = res.data.code;
          let user_data = res.data.data;

          if (response_code === "registration-successful") {
            setMessage(
              "Successfully registered. Kindly check your mail for completion"
            );
          }
          if (response_code === "previously-registered") {
            setMessage(
              "Previously registered. Can proceed to sign in"
            );
          }
        })
        .catch((err) => {
          // Handle error
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
      console.log(feedback);

      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      passwordRef.current.value = "";
      emailRef.current.value = "";
      phoneNumberRef.current.value = "";
    }
  };

  return (
    <div onClick={navbar_closer}>
      <div className="login-page">
        <div className="form">
          <p>{message}</p>
          <input type="text" placeholder="First name" ref={firstNameRef} />
          <input type="text" placeholder="Last name" ref={lastNameRef} />

          <input type="tel" placeholder="Phone number" ref={phoneNumberRef} />
          <input type="password" placeholder="Password" ref={passwordRef} />
          <input type="email" placeholder="Email address" ref={emailRef} />

          <button type="button" onClick={registerSender}>
            Register
          </button>
          <p className="message">
            Already registered?{" "}
            <Link to="/sign_in" className="click" id="sign_in">
              Sign In
            </Link>
          </p>
          <SpinnerCircularFixed
            size={30}
            enabled={loading}
            color="rgb(15,173,183)"
            secondaryColor="white"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
