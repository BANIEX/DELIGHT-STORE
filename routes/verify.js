const express = require("express");
require("dotenv").config();
const mongodb = require("mongodb");
const Router = express.Router();

const MongoClient = mongodb.MongoClient;

const client = new MongoClient(process.env.DB_URL);





const verify = Router.post("/", async (request, response)=>{
  let email = request.body.email;
  let key = request.body.key;

  console.log(email, key);
  // response.send("verify backend acknowledged")



  let feedback = await client.db(process.env.DB_NAME).collection("user_info").findOne({email});
  if(feedback){
    console.log(feedback)
    if(feedback.key == key){
      if(feedback.is_user_verified === true){
        response.send({
          message: "User already verified",
          data: { email },
          code: "Pre-verified user",
        });

      }else{
          const verified = client
            .db(process.env.DB_NAME)
            .collection("user_info")
            .updateOne({ email }, { $set: { is_user_verified: true } });
          if (verified) {
            response.send({
              message: "User verified successfully",
              data: { email },
              code: "Verification successful",
            });
          }

      }
      
    
    }else{
      response.send({
        message: "Invalid key",
        data: {email},
        code: "Invalid link"
      })
    }

  }else{
    response.send({
      message: "Invalid user",
      data: [],
      code: "Invalid link"
    })
  }

  



})

module.exports = verify;