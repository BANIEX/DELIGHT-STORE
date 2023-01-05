import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams,  } from 'react-router-dom';
import axios from 'axios';
import { SpinnerCircularFixed } from "spinners-react";


const Verify = () => {
  const navigate = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams();
  let [message, setMessage] = useState("")
  let [loading, setLoading] = useState(true);

  let email = searchParams.get("email");
  let key = searchParams.get("key");

  let verify_details = {email, key};
  // alert(email)


  

  const verifyHandler = () => {
    let feedback = axios
      .post("/verify", verify_details)
      .then((response) => {
        let result = response.data;
        console.log(result)
        if (result.code === "Pre-verified user") {
          setMessage("Account already verified");
          let timer = setTimeout(() => {
            navigate("/sign_in");
          }, "4000");
        }
        if (result.code === "Verification successful") {
          setMessage("Verification successful");
          let timer = setTimeout(() => {
            navigate("/sign_in");
          }, "4000");
        }
        if (result.code === "Invalid link") {
          setMessage("Invalid link");
          let timer = setTimeout(() => {
            navigate("/sign_in");
          }, "4000");
        }
        
        
      })
      .catch((error) => {
        console.log(error);
      });


  }

  useEffect(()=> {
    verifyHandler()
    

  }, [])




  return (
    <>
      <div>Verify... </div>

      <p>{message}</p>
      <SpinnerCircularFixed
        size={30}
        enabled={loading}
        color="rgb(15,173,183)"
        secondaryColor="white"
      />
    </>
  );
}

export default Verify