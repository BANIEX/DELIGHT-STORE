const { Router } = require("express");
const router = Router();
require("dotenv").config();

const mongodb = require("mongodb")
const mongoClient =  mongodb.MongoClient;
const client = new mongoClient(process.env.DB_URL);

const cart_store = router.post("/", async function(request, response){
  let cart_data = request.body
  console.log(cart_data)
  cart_data = {cart_data}
  console.log(request.session.data);
  let email = request.session.data.email;
  console.log(email)


   const feedback = await client.db(process.env.DB_NAME).collection("user_info").updateOne({email}, {$set: cart_data});

   if(feedback){
    console.log(feedback)
   }



})

module.exports = cart_store;

