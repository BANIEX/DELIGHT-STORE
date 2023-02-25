const { Router } = require("express");
const router = Router();

require("dotenv").config();

const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const client = new mongoClient(process.env.DB_URL);

const product_changerRouter = router.post(
  "/",
  async function (request, response) {
    console.log("product_changer");
    let product_data = request.body.product_data;
    console.log(product_data);
    // not_data = {cart_data};
    // console.log(request.session.data);
    // let email = request.session.data.email;
    // console.log(email);

    const feedback = await client
      .db(process.env.DB_NAME)
      .collection("product_store")
      .updateOne({}, { $set: { notification_message: notification_data } });

    if (feedback) {
      console.log(feedback);
      response.send({
        message: "product changed successfully",
        data: [],
        code: "product-changed",
      });
    } else {
      response.send({
        message: "product changing error",
        data: [],
        code: "product changing error",
      });
    }
  }
);

module.exports = product_changerRouter;
