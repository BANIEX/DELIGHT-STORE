const express = require("express");
const Router = express.Router()
require("dotenv").config();
const mongodb = require("mongodb");

const mongoClient = mongodb.MongoClient;

const client = new mongoClient(process.env.DB_URL);

const sign_outRouter = Router.post("/", async (request, response)=>{

  request.session.destroy(function(error){
    if (error) throw error;

    response.send({
      message: "User Logger out",
      data: [],
      code: "Logout-success"
    })
  })

})

module.exports = sign_outRouter

