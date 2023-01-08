import React from "react";
import { useEffect, useState, useRef } from "react";
import {Link, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { SpinnerCircularFixed } from "spinners-react";

const ResetPassword = (props) => {
  let navbar_closer = props.navbar_closer;
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  let [message, setMessage] = useState("");
  let [loading, setLoading] = useState(false);
  let [isValid, setIsValid] = useState(false);

  let email = searchParams.get("email");
  let token = searchParams.get("token");

  
  const passwordOneRef = useRef(null);
  const passwordTwoRef = useRef(null);



  let reset_password_details = { email, token };
  



  const resetPasswordHandler = () => {
    setLoading(true)
    let feedback = axios
      .post("/reset_password", reset_password_details)
      .then((response) => {
        let result = response.data;
        //////////////console.log(result)
        if (result.code === "Token-Error") {
          setLoading(false)
          setMessage("Invalid Link");
          let timer = setTimeout(() => {
            navigate("/");
          }, "4000");
        }
        if (result.code === "Wrong-email") {
          setLoading(false);
          setMessage("Invalid Link");
          let timer = setTimeout(() => {
            navigate("/");
          }, "4000");
        }
        if (result.code === "Correct-token") {
          setLoading(false);
          setIsValid(true);
        }
      })
      .catch((error) => {
        //console.log(error);
      });
  };


  const changePasswordHandler = () => {

    setLoading(true);
    
  let passwordOne = passwordOneRef.current.value;
  let passwordTwo = passwordTwoRef.current.value;
  let change_password_details = { email, token, passwordTwo };

    if(passwordOne === passwordTwo){

      let change_passwordFeedback = axios
        .post("/change_password", change_password_details)
        .then((response) => {
          let result = response.data;
          if (result.code === "password-updated") {
            setLoading(false)
            setMessage("Password successfully changed");
            let timer = setTimeout(() => {
              navigate("/");
            }, "4000");
          }
          if (result.code === "token-error") {
            setLoading(false);
            setMessage("Password change error");
            let timer = setTimeout(() => {
              navigate("/");
            }, "4000");
          }
          if (result.code === "wrong-details") {
            setLoading(false);
            setMessage("Password change error");
            let timer = setTimeout(() => {
              navigate("/sign_in");
            }, "4000");
          }
          if (result.code === "wrong-details") {
            setLoading(false);
            setMessage("Password change error");
            let timer = setTimeout(() => {
              navigate("/sign_in");
            }, "4000");
          }
        })
        .catch((error) => {
          //console.log(error);
        });



    }
    else{
      setLoading(false)
      setMessage("Password do not match")
    }



        
  }


  useEffect(()=>{
    resetPasswordHandler()
  },[] )



  return (
    <>
      <div onClick={navbar_closer}>
        <div className="login-page">
          <div className="form">
            <div>{message}</div>

            {isValid && (
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  ref={passwordOneRef}
                />
                <input
                  type="password"
                  placeholder="Password Again"
                  ref={passwordTwoRef}
                />
                <button type="button" onClick={changePasswordHandler}>
                  Confirm
                </button>
              </div>
            )}

            <SpinnerCircularFixed
              size={20}
              enabled={loading}
              color="rgb(15,173,183)"
              secondaryColor="white"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
