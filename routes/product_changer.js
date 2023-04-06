const { Router } = require("express");
const router = Router();

require("dotenv").config();

const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const client = new mongoClient(process.env.DB_URL);



const restrictToIP = (req, res, next) => {
  const allowedIP = "192.168.43.186"; // Replace with your IP address
  const clientIP = req.ip;
  if (clientIP !== allowedIP) {
    console.log("hi");
    return res.send({
      message: "no permission to save",
      data: [],
      code: "not-authorized",
    });
  }
  next();
};

const product_changerRouter = router.post(
  "/",
  async function (request, response) {
    console.log("product_changer");
    let product_data = request.body.product_data;
    console.log(product_data);




    const productStructurer = (product_data) => {
      let possibleCategories = []
      for (let i=0; i < product_data.length; i++ ){
        let productCategory = product_data[i].category;
        possibleCategories.push(productCategory);
        console.log(productCategory);
      }

      let uniquePossibleCategories = new Set(possibleCategories);
      uniquePossibleCategories = [...uniquePossibleCategories]
      console.log(uniquePossibleCategories);
      return uniquePossibleCategories

    };

   let uniquePossibleCategories = productStructurer(product_data)

    const finalProductStructurer = (categoryName, product_data ) => {

      

      let currentCategoryProducts = [];

      for (let i = 0; i < product_data.length; i++) {
        product_data[i] = { ...product_data[i], product_no_of_pieces: 1, product_id: product_data[i].ID };
       if(product_data[i].category === categoryName){
        currentCategoryProducts.push(product_data[i])
       }
      }

      return {
        name: categoryName,
        products: currentCategoryProducts
      }

    
    };


    // let answer = finalProductStructurer("Grains", product_data)
    // console.log(answer);

    let allInAll = [];

    for (let i = 0; i < uniquePossibleCategories.length; i++){
      let currentObject = finalProductStructurer(uniquePossibleCategories[i], product_data);
      allInAll.push(currentObject);
    }

    console.log(allInAll)





    
    

    const feedback = await client
      .db(process.env.DB_NAME)
      .collection("product_store")
      .updateOne({}, { $set: { product_info: allInAll } });

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
