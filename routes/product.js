let { Router } = require("express");
let router = Router();
require("dotenv").config();
let mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const client = new mongoClient(process.env.DB_URL);

const productRouter = router.get("/", async function (request, response) {
  console.log("product");

  const feedback = await client
    .db(process.env.DB_NAME)
    .collection("product_store")
    .findOne({});

  if (feedback) {
    console.log(feedback);
    response.send({
      message: "products sent",
      data: feedback.product_info,
      code: "product-sent",
    });
  } else {
    response.send({
      message: "product retrieval error",
      data: [],
      code: "product-not-sent",
    });
  }
});

module.exports = productRouter;
