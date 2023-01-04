var express = require("express");
var router = express.Router();
require("dotenv").config();
const random = require("simple-random-number-generator");


const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const client = new mongoClient(process.env.DB_URL);
const bcryptjs = require("bcryptjs");

const nodemailer = require("nodemailer");

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
  integer: true,
};



/* GET users listing. */
const registerRouter = router.post("/", async function (req, res, next) {
  const first_name = req.body.firstName;
  const last_name = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const key = random(params);
  const is_user_verified = false;
  const cart_data = [];
  const order_data = [];  

  
          


  console.log(first_name, last_name, email, password);

  const feedback = await client
    .db(process.env.DB_NAME)
    .collection("user_info")
    .findOne({ email });
  console.log(feedback);

  if (feedback) {
    res.send({
      message: "User already registered, can proceed to sign in",
      data: [],
      code: "previously-registered"
    });
  } else {
    let hashedPassword = await bcryptjs.hash(password, 12);

    // const email_url = "https://www.delightexpresscargo.org"
    const email_url = "http://localhost:3000/";


    const email_link = `${email_url}/verify?email=${email}&&key=${key}`;

    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: email,
      subject: `DELIGHT EXPRESS ACCOUNT VERIFICATION`,
      html: `<body>
                        <h3>Congratulations ${first_name}, you are in the last phase of your account creation. Click the link below to complete your registration</h3>
                        <hr>
                        <br>
                        <a target='_blank' href='${email_link}'>Verify here</a>
                </body>`,
    };


    const feedback = await client
      .db(process.env.DB_NAME)
      .collection("user_info")
      .insertOne({ first_name, last_name, email, password: hashedPassword, key, is_user_verified, cart_data });

    if (feedback) {

       transporter.sendMail(mailOptions, async function(error, info){
        if (error) {
          console.log(error);
             res.send({
               message:
                 "Registration completed. Email sending error,",
               data: {
                 email,
               },
               code: "registration-successful",
             });
    
          throw error
        } else {
          console.log('Email sent: ' + info.response);
             res.send({
               message:
                 "User Successfully registered and email sent, can proceed to sign in",
               data: {
                 email,
               },
               code: "registration-successful",
             });
    
        }
      })

             

   
    }


}

  // res.send("respond with a resource");
});

module.exports = registerRouter;
