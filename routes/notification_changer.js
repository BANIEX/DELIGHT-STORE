const {Router} = require("express")
const router = Router();

require("dotenv").config();

const mongodb = require("mongodb")
const mongoClient =  mongodb.MongoClient
const client = new mongoClient(process.env.DB_URL);

const notification_changerRouter = router.post("/", async function (request, response) {
  console.log("notification");
  let notification_data = request.body.notification_data;
  console.log(notification_data);
  // not_data = {cart_data};
  // console.log(request.session.data);
  // let email = request.session.data.email;
  // console.log(email);

  const feedback = await client
    .db(process.env.DB_NAME)
    .collection("notification_store")
    .updateOne({ }, { $set: {notification_message : notification_data}});

  if (feedback) {
    console.log(feedback);
    response.send({
      message: "notification changed successfully",
      data: [],
      code: "notification-changed",
    });
  }

  else{

     response.send({
       message: "notification changing error",
       data: [],
       code: "notification changing error",
     });
    
  }

 
});

module.exports = notification_changerRouter;

