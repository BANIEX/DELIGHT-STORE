import React from "react";
import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SpinnerCircularFixed } from "spinners-react";

const Register = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("");


  const registerSender = () => {
    setLoading(true)
    
    let firstName = firstNameRef.current.value;
    let lastName = lastNameRef.current.value;
    let password = passwordRef.current.value;
    let email = emailRef.current.value;

    let registerInfo = { firstName, lastName, password, email };

    console.log(firstName, lastName, password, email);

    let feedback = axios
      .post("http://localhost:9000/register", registerInfo)
      .then((res) => {
        // Work with the response...
        console.log(res);

        
        let response_code = res.data.code;
        let user_data = res.data.data;

        if(response_code === 'registration-successful'){
          setMessage("Successfully registered. Kindly check your mail for completion")
        }

      })
      .catch((err) => {
        // Handle error
        console.log(err);
      })
      .finally(()=>{
        setLoading(false)
      });
    console.log(feedback);

    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    passwordRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <>
      <div className="login-page">
        <div className="form">
          <p>{message}</p>
          <input type="text" placeholder="First name" ref={firstNameRef} />
          <input type="text" placeholder="Last name" ref={lastNameRef} />

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
            color="palevioletred"
            secondaryColor="white"
          />
        </div>
      </div>
    </>
  );
};

export default Register;
