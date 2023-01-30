let { Router} = require("express");
let router = Router()
require("dotenv").config()
let mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const client = new mongoClient(process.env.DB_URL);


const notificationRouter = router.get(
  "/",
  async function (request, response) {
    console.log("notification");

    const feedback = await client
      .db(process.env.DB_NAME)
      .collection("notification_store")
      .findOne({});

    if (feedback) {
      console.log(feedback);
       response.send({
         message: "notifications sent",
         data: feedback.notification_message,
         code: "notification-sent",
       });
    }

    else{

      response.send({
        message: "notification retrieval error",
        data: [],
        code: "notification-not-sent",
      });

    }

    
  }
);

module.exports = notificationRouter;



