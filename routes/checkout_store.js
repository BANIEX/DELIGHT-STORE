var express = require("express");
var Router = express.Router();
const mongodb = require("mongodb");


const checkout_store = Router.post("/", (request, response)=>{
  const body = request.body;
  console.log(body)
  console.log("checkout store")
} ) 


module.exports = checkout_store