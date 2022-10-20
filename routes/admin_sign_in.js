const express = require("express");
const Router = express.Router();
require("dotenv").config();
const nodemailer = require("nodemailer");


const mongodb = require("mongodb");
const session = require("express-session");
const mongodbSession = require("connect-mongodb-session")(session);

const mongodbSessionStore = new mongodbSession({
  uri: process.env.DB_URL,
  databaseName: process.env.DB_NAME,
  collection: "db-sessions",
});

const mongoClient = mongodb.MongoClient;

const client = new mongoClient(process.env.DB_URL);


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





const admin_sign_inRouter = Router.post("/", async function (request, response, next) {
  let password = request.body.password;
  
  console.log(request.body)
  let feedback = await client.db(process.env.DB_NAME).collection("admin").findOne({password})
  if(feedback){
    request.session.admin = {
      code: "admin-logged-in",

    }
    response.send({
      messsage: "Admin logged in successfully",
      data: request.session.data,
      code: "admin-logged-in"
    })
  }else{
    response.send({
      messsage: "Invalid login details",
      data: "",
      code: "admin-not-logged-in",
    });

  }
});

module.exports = admin_sign_inRouter;
