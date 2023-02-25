const express = require("express");

const Router = express.Router();


const FLOUR = {
  name: "FLOUR",
  products: [
    {
      product_name: "Beans Flour",
      product_price: "2000",
      product_weight: "1",
      product_volume: "",
      product_image:
        "https://media.istockphoto.com/photos/rice-in-transparent-plastic-bag-isolated-on-white-bacround-picture-id1011356342",
      product_description: "Beans flour for consumption",
      product_no_of_pieces: 1,
      product_id: "flour_beans_flour_1",
    },
    {
      product_name: "Yam Flour",
      product_price: "4000",
      product_weight: "2",
      product_volume: "",
      product_image:
        "https://media.istockphoto.com/photos/package-of-dry-raw-peas-isolated-picture-id1182204006?s=612x612",
      product_description: "Yam flour for consumption",
      product_no_of_pieces: 1,
      product_id: "flour_yam_flour_2",
    },
    {
      product_name: "Plaintain Flour",
      product_price: "4500",
      product_weight: "2",
      product_volume: "",
      product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
      product_description: "Plaintain flour for consumption",
      product_no_of_pieces: 1,
      product_id: "flour_plaintain_flour_3",
    },
    {
      product_name: "Dry Pap",
      product_price: "2500",
      product_weight: "1",
      product_volume: "",
      product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
      product_description: "Dry Pap for consumption",
      product_no_of_pieces: 1,
      product_id: "flour_dry_pap_4",
    },
  ],
};

const GRAIN = {
  name: "GRAIN",
  products: [
    {
      product_name: "Honey Beans",
      product_price: "3500",
      product_weight: "2",
      product_volume: "",
      product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
      product_description: "Honey Beans for consumption",
      product_no_of_pieces: 1,
      product_id: "grains_honey_beans_5",
    },
    {
      product_name: "Ofada Rice",
      product_price: "3500",
      product_weight: "2",
      product_volume: "",
      product_image:
        "https://media.istockphoto.com/photos/package-of-dry-raw-peas-isolated-picture-id1182204006?s=612x612",
      product_description: "Ofada Rice for consumption",
      product_no_of_pieces: 1,
      product_id: "grain_ofada_rice_6",
    },
    {
      product_name: "Ijebu Garri",
      product_price: "1600",
      product_weight: "2",
      product_volume: "",
      product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
      product_description: "Ijebu Garri for consumption",
      product_no_of_pieces: 1,
      product_id: "grain_ijebu_garri_7",
    },
    {
      product_name: "Yellow Garri",
      product_price: "1700",
      product_weight: "2",
      product_volume: "",
      product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
      product_description: "Yellow Garri for consumption",
      product_no_of_pieces: 1,
      product_id: "grain_yellow_garri_8",
    },
    {
      product_name: "Honey Beans",
      product_price: "3500",
      product_weight: "2",
      product_volume: "",
      product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
      product_description: "Honey Beans for consumption",
      product_no_of_pieces: 1,
      product_id: "grains_honey_beans_5",
    },
    {
      product_name: "Ofada Rice",
      product_price: "3500",
      product_weight: "2",
      product_volume: "",
      product_image:
        "https://media.istockphoto.com/photos/package-of-dry-raw-peas-isolated-picture-id1182204006?s=612x612",
      product_description: "Ofada Rice for consumption",
      product_no_of_pieces: 1,
      product_id: "grain_ofada_rice_6",
    },
    {
      product_name: "Ijebu Garri",
      product_price: "1600",
      product_weight: "2",
      product_volume: "",
      product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
      product_description: "Ijebu Garri for consumption",
      product_no_of_pieces: 1,
      product_id: "grain_ijebu_garri_7",
    },
    {
      product_name: "Yellow Garri",
      product_price: "1700",
      product_weight: "2",
      product_volume: "",
      product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
      product_description: "Yellow Garri for consumption",
      product_no_of_pieces: 1,
      product_id: "grain_yellow_garri_8",
    },
    {
      product_name: "Honey Beans",
      product_price: "3500",
      product_weight: "2",
      product_volume: "",
      product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
      product_description: "Honey Beans for consumption",
      product_no_of_pieces: 1,
      product_id: "grains_honey_beans_5",
    },
    {
      product_name: "Ofada Rice",
      product_price: "3500",
      product_weight: "2",
      product_volume: "",
      product_image:
        "https://media.istockphoto.com/photos/package-of-dry-raw-peas-isolated-picture-id1182204006?s=612x612",
      product_description: "Ofada Rice for consumption",
      product_no_of_pieces: 1,
      product_id: "grain_ofada_rice_6",
    },
    {
      product_name: "Ijebu Garri",
      product_price: "1600",
      product_weight: "2",
      product_volume: "",
      product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
      product_description: "Ijebu Garri for consumption",
      product_no_of_pieces: 1,
      product_id: "grain_ijebu_garri_7",
    },
    {
      product_name: "Yellow Garri",
      product_price: "1700",
      product_weight: "2",
      product_volume: "",
      product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
      product_description: "Yellow Garri for consumption",
      product_no_of_pieces: 1,
      product_id: "grain_yellow_garri_8",
    },
  ],
};

const LIQUID = {
  name: "LIQUID",
  products: [
    {
      product_name: "Palm Oil",
      product_price: "5000",
      product_weight: "5",
      product_volume: "1L",
      product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
      product_description: "Palm Oil for consumption",
      product_no_of_pieces: 1,
      product_id: "liquid_palm_oil_5",
    },
    {
      product_name: "Groundnut Oil",
      product_price: "6000",
      product_weight: "6",
      product_volume: "2L",
      product_image:
        "https://media.istockphoto.com/photos/package-of-dry-raw-peas-isolated-picture-id1182204006?s=612x612",
      product_description: "Groundnut Oil for consumption",
      product_no_of_pieces: 1,
      product_id: "liquid_groundnut_oil_6",
    },
    {
      product_name: "Palm Oil",
      product_price: "7000",
      product_weight: "7",
      product_volume: "3L",
      product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
      product_description: "Palm Oil for consumption",
      product_no_of_pieces: 1,
      product_id: "liquid_palm_oil_5",
    },
    {
      product_name: "Groundnut Oil",
      product_price: "8000",
      product_weight: "8",
      product_volume: "4L",
      product_image:
        "https://media.istockphoto.com/photos/package-of-dry-raw-peas-isolated-picture-id1182204006?s=612x612",
      product_description: "Groundnut Oil for consumption",
      product_no_of_pieces: 1,
      product_id: "liquid_groundnut_oil_6",
    },
  ],
};

const GROUNDED_PRODUCT = {
  name: "GROUNDED PRODUCT",
  products: [
    {
      product_name: "Crayfish",
      product_price: "2500",
      product_weight: "0.25",
      product_volume: "",
      product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
      product_description: "Honey Beans for consumption",
      product_no_of_pieces: 1,
      product_id: "grains_honey_beans_5",
    },
    {
      product_name: "Egusi",
      product_price: "3500",
      product_weight: "1",
      product_volume: "",
      product_image:
        "https://media.istockphoto.com/photos/package-of-dry-raw-peas-isolated-picture-id1182204006?s=612x612",
      product_description: "Ofada Rice for consumption",
      product_no_of_pieces: 1,
      product_id: "grain_ofada_rice_6",
    },
    {
      product_name: "Ogbono",
      product_price: "4300",
      product_weight: "0.5",
      product_volume: "",
      product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
      product_description: "Ijebu Garri for consumption",
      product_no_of_pieces: 1,
      product_id: "grain_ijebu_garri_7",
    },
    {
      product_name: "Hot Chilli Pepper",
      product_price: "2000",
      product_weight: "2",
      product_volume: "",
      product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
      product_description: "Yellow Garri for consumption",
      product_no_of_pieces: 1,
      product_id: "grain_yellow_garri_8",
    },
  ],
};




var dresspro_database = [
  GRAIN, FLOUR, LIQUID, GROUNDED_PRODUCT
  
];

let mock_array = [
  {
    name: "GRAIN",
    products: [
      {
        product_name: "Honey Beans",
        product_price: "3500",
        product_weight: "2",
        product_volume: "",
        product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
        product_description: "Honey Beans for consumption",
        product_no_of_pieces: 1,
        product_id: "grains_honey_beans_5",
      },
      {
        product_name: "Ofada Rice",
        product_price: "3500",
        product_weight: "2",
        product_volume: "",
        product_image:
          "https://media.istockphoto.com/photos/package-of-dry-raw-peas-isolated-picture-id1182204006?s=612x612",
        product_description: "Ofada Rice for consumption",
        product_no_of_pieces: 1,
        product_id: "grain_ofada_rice_6",
      },
      {
        product_name: "Ijebu Garri",
        product_price: "1600",
        product_weight: "2",
        product_volume: "",
        product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
        product_description: "Ijebu Garri for consumption",
        product_no_of_pieces: 1,
        product_id: "grain_ijebu_garri_7",
      },
      {
        product_name: "Yellow Garri",
        product_price: "1700",
        product_weight: "2",
        product_volume: "",
        product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
        product_description: "Yellow Garri for consumption",
        product_no_of_pieces: 1,
        product_id: "grain_yellow_garri_8",
      },
      {
        product_name: "Honey Beans",
        product_price: "3500",
        product_weight: "2",
        product_volume: "",
        product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
        product_description: "Honey Beans for consumption",
        product_no_of_pieces: 1,
        product_id: "grains_honey_beans_5",
      },
      {
        product_name: "Ofada Rice",
        product_price: "3500",
        product_weight: "2",
        product_volume: "",
        product_image:
          "https://media.istockphoto.com/photos/package-of-dry-raw-peas-isolated-picture-id1182204006?s=612x612",
        product_description: "Ofada Rice for consumption",
        product_no_of_pieces: 1,
        product_id: "grain_ofada_rice_6",
      },
      {
        product_name: "Ijebu Garri",
        product_price: "1600",
        product_weight: "2",
        product_volume: "",
        product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
        product_description: "Ijebu Garri for consumption",
        product_no_of_pieces: 1,
        product_id: "grain_ijebu_garri_7",
      },
      {
        product_name: "Yellow Garri",
        product_price: "1700",
        product_weight: "2",
        product_volume: "",
        product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
        product_description: "Yellow Garri for consumption",
        product_no_of_pieces: 1,
        product_id: "grain_yellow_garri_8",
      },
      {
        product_name: "Honey Beans",
        product_price: "3500",
        product_weight: "2",
        product_volume: "",
        product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
        product_description: "Honey Beans for consumption",
        product_no_of_pieces: 1,
        product_id: "grains_honey_beans_5",
      },
      {
        product_name: "Ofada Rice",
        product_price: "3500",
        product_weight: "2",
        product_volume: "",
        product_image:
          "https://media.istockphoto.com/photos/package-of-dry-raw-peas-isolated-picture-id1182204006?s=612x612",
        product_description: "Ofada Rice for consumption",
        product_no_of_pieces: 1,
        product_id: "grain_ofada_rice_6",
      },
      {
        product_name: "Ijebu Garri",
        product_price: "1600",
        product_weight: "2",
        product_volume: "",
        product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
        product_description: "Ijebu Garri for consumption",
        product_no_of_pieces: 1,
        product_id: "grain_ijebu_garri_7",
      },
      {
        product_name: "Yellow Garri",
        product_price: "1700",
        product_weight: "2",
        product_volume: "",
        product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
        product_description: "Yellow Garri for consumption",
        product_no_of_pieces: 1,
        product_id: "grain_yellow_garri_8",
      },
    ],
  },

  {
    name: "FLOUR",
    products: [
      {
        product_name: "Beans Flour",
        product_price: "2000",
        product_weight: "1",
        product_volume: "",
        product_image:
          "https://media.istockphoto.com/photos/rice-in-transparent-plastic-bag-isolated-on-white-bacround-picture-id1011356342",
        product_description: "Beans flour for consumption",
        product_no_of_pieces: 1,
        product_id: "flour_beans_flour_1",
      },
      {
        product_name: "Yam Flour",
        product_price: "4000",
        product_weight: "2",
        product_volume: "",
        product_image:
          "https://media.istockphoto.com/photos/package-of-dry-raw-peas-isolated-picture-id1182204006?s=612x612",
        product_description: "Yam flour for consumption",
        product_no_of_pieces: 1,
        product_id: "flour_yam_flour_2",
      },
      {
        product_name: "Plaintain Flour",
        product_price: "4500",
        product_weight: "2",
        product_volume: "",
        product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
        product_description: "Plaintain flour for consumption",
        product_no_of_pieces: 1,
        product_id: "flour_plaintain_flour_3",
      },
      {
        product_name: "Dry Pap",
        product_price: "2500",
        product_weight: "1",
        product_volume: "",
        product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
        product_description: "Dry Pap for consumption",
        product_no_of_pieces: 1,
        product_id: "flour_dry_pap_4",
      },
    ],
  },

  {
    name: "LIQUID",
    products: [
      {
        product_name: "Palm Oil",
        product_price: "5000",
        product_weight: "5",
        product_volume: "1L",
        product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
        product_description: "Palm Oil for consumption",
        product_no_of_pieces: 1,
        product_id: "liquid_palm_oil_5",
      },
      {
        product_name: "Groundnut Oil",
        product_price: "6000",
        product_weight: "6",
        product_volume: "2L",
        product_image:
          "https://media.istockphoto.com/photos/package-of-dry-raw-peas-isolated-picture-id1182204006?s=612x612",
        product_description: "Groundnut Oil for consumption",
        product_no_of_pieces: 1,
        product_id: "liquid_groundnut_oil_6",
      },
      {
        product_name: "Palm Oil",
        product_price: "7000",
        product_weight: "7",
        product_volume: "3L",
        product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
        product_description: "Palm Oil for consumption",
        product_no_of_pieces: 1,
        product_id: "liquid_palm_oil_5",
      },
      {
        product_name: "Groundnut Oil",
        product_price: "8000",
        product_weight: "8",
        product_volume: "4L",
        product_image:
          "https://media.istockphoto.com/photos/package-of-dry-raw-peas-isolated-picture-id1182204006?s=612x612",
        product_description: "Groundnut Oil for consumption",
        product_no_of_pieces: 1,
        product_id: "liquid_groundnut_oil_6",
      },
    ],
  },

  {
    name: "GROUNDED PRODUCT",
    products: [
      {
        product_name: "Crayfish",
        product_price: "2500",
        product_weight: "0.25",
        product_volume: "",
        product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
        product_description: "Honey Beans for consumption",
        product_no_of_pieces: 1,
        product_id: "grains_honey_beans_5",
      },
      {
        product_name: "Egusi",
        product_price: "3500",
        product_weight: "1",
        product_volume: "",
        product_image:
          "https://media.istockphoto.com/photos/package-of-dry-raw-peas-isolated-picture-id1182204006?s=612x612",
        product_description: "Ofada Rice for consumption",
        product_no_of_pieces: 1,
        product_id: "grain_ofada_rice_6",
      },
      {
        product_name: "Ogbono",
        product_price: "4300",
        product_weight: "0.5",
        product_volume: "",
        product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
        product_description: "Ijebu Garri for consumption",
        product_no_of_pieces: 1,
        product_id: "grain_ijebu_garri_7",
      },
      {
        product_name: "Hot Chilli Pepper",
        product_price: "2000",
        product_weight: "2",
        product_volume: "",
        product_image: "https://bulksuppliers.com.ng/products/1553096841.jpg",
        product_description: "Yellow Garri for consumption",
        product_no_of_pieces: 1,
        product_id: "grain_yellow_garri_8",
      },
    ],
  },
];


const indexRouter = Router.get("/", function (request, response, next) {

    if(request.session){
      response.send({
        data: dresspro_database,
        user_data: request.session.data
      })
        console.log(request.session.data);

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
