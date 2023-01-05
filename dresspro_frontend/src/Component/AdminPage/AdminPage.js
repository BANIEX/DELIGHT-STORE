import React from "react";
import {useRef} from "react"
import axios from "axios"



const AdminPage = () => {
  const passwordRef = useRef(null);

  const adminLogin = async () => {
    let adminLoginDetails = {
      password : passwordRef.current.value
    }

    //console.log(adminLoginDetails)

    let feedback = axios.post("/admin/login", adminLoginDetails).then((res)=>{
      let response = res;
      //console.log(response)

    }).catch((err)=>{console.log(err )})

  }

  return (
    <>
      <div className="login-page">
        <div className="form">
          <form className="register-form">
            <div>ADMIN</div>
            <br />
            <input type="password" placeholder="Password" ref={passwordRef}/>
            <button type="button" onClick={adminLogin}>login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
