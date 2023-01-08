const { Router } = require("express");
const router = Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");


const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const client = new mongoClient(process.env.DB_URL);

const JWT_SECRET = "extremelyclassifieddinformation";

const change_password = router.post("/", async function (request, response) {
  let email = request.body.email;
  let newPassword = request.body.passwordTwo;
  let token = request.body.token;


  console.log(email);

  let feedback = await client
    .db(process.env.DB_NAME)
    .collection("user_info")
    .findOne({ email });
  if (feedback) {
    let email = feedback.email;
    let password = feedback.password;
    // let password = "baniex";

    const secret = JWT_SECRET + password;
    try {
      const payload = jwt.verify(token, secret);

      console.log(payload);

      let hashedPassword = await bcryptjs.hash(newPassword, 12);


      let feedback = await client.db(process.env.DB_NAME).collection("user_info").updateOne({email}, {$set: {password: hashedPassword}});

      if(feedback){
          response.send({
              message: "Password updated successfully",
              data: { email },
              code: "password-updated",
            });
      }else{
        response.send({
          message: "Password update error",
          data: { email },
          code: "password-update-error",
        });

      }

     
      
     
    } catch (error) {
      console.log(error.message);
      response.send({
        message: "Token Verification Error",
        data: [],
        code: "token-Error",
      });
    }

    
  } else {
    response.send({
      message: "Email does not exist",
      data: [],
      code: "wrong-details",
    });
  }
});

module.exports = change_password;
