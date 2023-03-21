var express = require("express");
var Router = express.Router();
require("dotenv").config();
const mongodb = require("mongodb");
const nodemailer = require("nodemailer");

const session = require("express-session");
const mongodbSession = require("connect-mongodb-session")(session);
const random = require("simple-random-number-generator");

const mongodbSessionStore = new mongodbSession({
  uri: process.env.DB_URL,
  databaseName: process.env.DB_NAME,
  collection: "db-sessions",
});

const mongoClient = mongodb.MongoClient;

const client = new mongoClient(process.env.DB_URL);

const bcryptjs = require("bcryptjs");


var transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 465,
  secure: true,
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});





let params = {
  min: 1000000,
  max: 100000000,
  integer: true
};

console.log(random(params)); 

/* GET users listing. */
const sign_inRouter = Router.post("/", async function (req, res, next) {

  // console.log(req.body)
  let email = req.body.email;
  let password = req.body.password;

  console.log("hello");
  console.log(email, password)
  // res.send("acknowledeg")
  // return

  // check if he is a registered users

  let feedback = await client
    .db(process.env.DB_NAME)
    .collection("user_info")
    .findOne({ email });
  if (feedback) {
    const isMatchedPassword = await bcryptjs.compare(
      password,
      feedback.password
    );
    console.log("checking password");

    if (isMatchedPassword) {
      console.log(req.session);
         req.session.data = {
           email: feedback.email,
           first_name: feedback.first_name,
           last_name: feedback.last_name,
           cart_data: feedback.cart_data,
           phone_number: feedback.phone_number,
           is_user_verified: feedback.is_user_verified
         };
      res.send({
        message: "User logged in successfully",
        data: req.session.data,
        code: "Login-success"
      });
    } else {
      res.send({
        message: "Wrong password",
        data: [],
        code: "Wrong-details"
      });
    }
  } else {
    res.send({
      message: "Email does not exist",
      data: [],
      code: "Wrong-details"
    });
  }
});

module.exports = sign_inRouter;
