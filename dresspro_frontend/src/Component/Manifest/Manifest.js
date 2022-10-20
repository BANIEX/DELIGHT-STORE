import React from 'react'
import axios from 'axios';
import {useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { SpinnerCircularFixed } from "spinners-react";

import "./Manifest.css"

const Manifest = (props) => {
  const navigate = useNavigate();
  let navbar_closer = props.navbar_closer;



  let {isLoggedIn, userData} = props;


  useEffect(()=>{
    isUserAllowed()
  }, [])

  const isUserAllowed = () =>{
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      navigate("/register");
    }
  }
  const receiverFullNameRef = useRef("");
  const receiverPhoneNumberRef = useRef("");
  // const receiverPhoneNumberRef = useRef("");
  const receiverAddressRef = useRef("");
  const receiverCountryRef = useRef("");

  const [message, setMessage] = useState("");
  let [loading, setLoading] = useState(false);


  const formChecker = () => {
    if (receiverFullNameRef.current.value === ''){
      setMessage("Kindly fill the Receiver's Full Name");
      return false
    }
    if (receiverPhoneNumberRef.current.value === "") {
      setMessage("Kindly fill the Receiver's Phone Number");
      return false;
    }
    if (receiverAddressRef.current.value === "") {
      setMessage("Kindly fill the Receiver's Address");
      return false;
    }
    
    if (receiverCountryRef.current.value === "") {
      setMessage("Kindly fill the Receiver's Country");
      return false;
    }

    return true
  }

  

  


  const manifestSubmiter = () => {

    if(formChecker()){
      // alert('about to send');
      setLoading(true)
      let receiverName = receiverFullNameRef.current.value;
      let receiverPhoneNumber = receiverPhoneNumberRef.current.value;
      let receiverAddress = receiverAddressRef.current.value;
      let receiverCountry = receiverCountryRef.current.value;

      let date = new Date();
      let timeSent = date.toString().slice(0, -40)
      // console.log(timeSent)

      const {  first_name, last_name, phone_number } = userData;


      let manifestObject = {
        "Time sent": timeSent,
        "Sender name": `${first_name} ${last_name}`,
        "Sender phone number": `'${phone_number}`,
        "Package number": "",
        "Receiver name": receiverName,
        "Receiver phone number": `'${receiverPhoneNumber}`,
        "Receiver address": receiverAddress,
        "Receiver country": receiverCountry,
        "Location": "",
        "Weight": "",
        "No of pieces": "",
      };

      
      axios
        .post(
          "https://sheet.best/api/sheets/924413c1-08d8-467f-a665-fa1af3cdb23d", manifestObject
        )
        .then((result) => {
          console.log(result);
          setMessage("Sent successfully");
          receiverFullNameRef.current.value = "";
          receiverPhoneNumberRef.current.value = "";
          receiverAddressRef.current.value = "";
          receiverCountryRef.current.value = "";

          setTimeout(() => {
            setMessage("");
          }, 2000);
        })
        .catch((error) => {console.log(error)}).finally(()=>{
          setLoading(false);
        });
    }

    

    



    
  }




  return (
    <div className="manifest-container" onClick={navbar_closer}>
      <div className="form">
        <p className="manifest-text">MANIFEST</p>
        <br/>

        <p className="form-message-error">{message}</p>
        <input
          type="text"
          placeholder="Receiver's Full name"
          ref={receiverFullNameRef}
        />
        {/* <input type="text" placeholder="Last name" /> */}

        <input
          type="tel"
          placeholder="Receiver's Phone number"
          ref={receiverPhoneNumberRef}
        />
        {/* <input type="password" placeholder="Password" /> */}
        {/* <input type="email" placeholder="Email address" /> */}
        <textarea
          rows="5"
          cols="60"
          name="description"
          placeholder="Receiver's address "
          ref={receiverAddressRef}
        ></textarea>
        <input
          type="text"
          placeholder="Receiver's Country"
          ref={receiverCountryRef}
        />

        <button type="button" onClick={manifestSubmiter}>
          Submit
        </button>
        <br />
        <br />

        <SpinnerCircularFixed
          size={30}
          enabled={loading}
          color="palevioletred"
          secondaryColor="white"
        />
      </div>
    </div>
  );
}

export default Manifest