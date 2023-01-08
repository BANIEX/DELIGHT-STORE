const { Router } = require("express");
const router = Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");

const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const client = new mongoClient(process.env.DB_URL);

const JWT_SECRET = "extremelyclassifieddinformation";

const reset_password = router.post("/", async function (request, response) {
  let email = request.body.email;
  let token = request.body.token;

  console.log(email);

  let feedback = await client
    .db(process.env.DB_NAME)
    .collection("user_info").findOne({ email });
  if (feedback) {
    let email = feedback.email;
    let password = feedback.password;
    // let password = "baniex"

    const secret = JWT_SECRET + password;
    try {

      const payload = jwt.verify(token, secret); 

      console.log(payload)

      response.send({
        message: "Token Verification Successful",
        data: {
          email: email,
          token: token
        },
        code: "Correct-token"
      })
      
    } catch (error) {

      console.log(error.message);
      response.send({
        message: "Token Verification Error",
        data: [],
        code: "Token-Error",
      });
    }

    const payload = {
      email: email,
    };




  } else {
    response.send({
      message: "Email does not exist",
      data: [],
      code: "Wrong-email",
    });
  }
});

module.exports = reset_password;
