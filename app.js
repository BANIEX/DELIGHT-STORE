// import path from "path";
const path = require("path");
// const __dirname = path.resolve()

var sslRedirect = require("heroku-ssl-redirect").default;

const express = require("express");


require("dotenv").config(); 

const mongodb = require("mongodb");
const cors = require("cors");

const session = require("express-session");
const mongodbSession = require("connect-mongodb-session")(session);
const mongodbSessionStore = new mongodbSession({
  uri: process.env.DB_URL,
  databaseName: process.env.DB_NAME,
  collection: "db-sessions",
});

const app = express();

app.use(sslRedirect());
app.use(
  session({
    secret: "whateverishereisbeautifulandblessedinthenameofJesusAmenMovingon",
    resave: false,
    saveUninitialized: false,
    store: mongodbSessionStore,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 * 4 * 12 }  //12 months
  })
);

const PORT = process.env.PORT || 8000 ;

let indexRouter = require("./routes/index");
let sign_inRouter = require("./routes/sign_in");
let registerRouter = require("./routes/register");
let sign_outRouter = require("./routes/sign_out");
let cart_storeRouter = require("./routes/cart_store");
let admin_sign_inRouter = require("./routes/admin_sign_in");
let verifyRouter = require("./routes/verify");
let checkout_storeRouter = require("./routes/checkout_store")
let forgot_passwordRouter = require("./routes/forgot_password")
let reset_passwordRouter = require("./routes/reset_password");
let change_passwordRouter = require("./routes/change_password");
let notificatonRouter = require("./routes/notification")
let notification_changerRouter = require("./routes/notification_changer")
let productRouter = require("./routes/product")
let product_changerRouter = require("./routes/product_changer");





app.use(cors());
app.use(express.json());
app.use("/data", indexRouter);
app.use("/sign_in", sign_inRouter);
app.use("/register", registerRouter);
app.use("/sign_out", sign_outRouter);
app.use("/cart_store",cart_storeRouter);
app.use("/admin/login", admin_sign_inRouter);
app.use("/verify", verifyRouter)
app.use("/checkout_store", checkout_storeRouter);
app.use("/forgot_password", forgot_passwordRouter);
app.use("/reset_password", reset_passwordRouter);
app.use("/change_password", change_passwordRouter);
app.use("/notification", notificatonRouter);
app.use("/notification_changer", notification_changerRouter)
app.use("/product", productRouter)
app.use("/product_changer", product_changerRouter);



// for deploymrny

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "/dresspro_frontend/build")));

  app.get( "*", (req,res) =>{
    res.sendFile(path.join(__dirname, "dresspro_frontend", "build", "index.html"))
  });

}
else{
  app.get("*", (req, res)=>{
    res.send("Api running");
  })
}

app.listen(PORT, function () {
  console.log(`Running on port ${PORT}`);
});
