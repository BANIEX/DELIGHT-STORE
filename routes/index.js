const express = require("express");

const Router = express.Router();


const FLOUR = {
  name: "FLOUR",
  products: [
    {
      product_name: "Beans Flour",
      product_price: "1800",
      product_weight: "2kg",
      product_volume: "",
      product_image:
        "https://media.istockphoto.com/photos/rice-in-transparent-plastic-bag-isolated-on-white-background-picture-id1011356342",
      prduct_description: "Smooth beans flour for consumption",
      product_no_of_pieces: 1,
    },
    {
      product_name: "Yam Flour",
      product_price: "1800",
      product_weight: "2kg",
      product_volume: "",
      product_image:
        "https://media.istockphoto.com/photos/package-of-dry-raw-peas-isolated-picture-id1182204006?s=612x612",
      prduct_description: "Smooth beans flour for consumption",
      product_no_of_pieces: 1,
    },
    {
      product_name: "Plaintain Flour",
      product_price: "1800",
      product_weight: "2kg",
      product_volume: "",
      product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
      prduct_description: "Smooth beans flour for consumption",
      product_no_of_pieces: 1,
    },
  ]
};



var dresspro_database = [
  FLOUR
  
];


const indexRouter = Router.get("/", function (request, response, next) {

    if(request.session){
      response.send({
        data: dresspro_database,
        user_data: request.session.data
      })
    }
    else{
      response.send({
        data: dresspro_database,
        user_data: null
      })
    }
    // console.log(request.session)
    // // response.send("Working from backend")
    // response.send(dresspro_database);
});

module.exports = indexRouter;
