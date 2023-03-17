import "./SpaceAtTheSide.css";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useBeforeunload } from "react-beforeunload";
import Specific from "../Specific/Specific";
import HomeMain from "../HomeMain/HomeMain";
import Cart from "../Cart/Cart";

import Navbar from "../Navbar/Navbar";
import localforage from "localforage";

import SecondLayer from "../SecondLayer/SecondLayer";
import Product from "../Product/Product";
import Feature from "../Feature/Feature";
import Footer from "../Footer/Footer";
import CustomerReview from "../CustomerReview/CustomerReview";
import Home from "../Home/Home";
import AboutUs from "../AboutUs/AboutUs";
import Section from "../Section/Section";
import { Policy } from "../Policy/Policy";
import { data } from "jquery";
import SignIn from "../SignIn/SignIn";
import AdminPage from "../AdminPage/AdminPage";
import Register from "../Register/Register";
import Verify from "../Verify/Verify";
import Manifest from "../Manifest/Manifest";
import Faq from "../Faq/Faq";
import Contact from "../Contact/Contact";
import TagManager from "react-gtm-module";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import ResetPassword from "../ResetPassword/ResetPassword";
import Notifications from "../Notifications/Notifications";
import ChangeNotification from "../ChangeNotification/ChangeNotification";
import AddProduct from "../AddProduct/AddProduct";




export default function SpaceAtTheSide() {
  const [dressProData, setDressProData] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [userData, setUserData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    cart_data: [],
    is_user_verified: false,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [location, setLocation] = useState("canada");
  const [locationPrice, setLocationPrice] = useState(3400);
  const navigate = useNavigate();

const notify = () => toast("Here is your toasasasasasasst.", {
  duration: 4000});


 

  const locationChanger = (chosenLocation) => {
    if (chosenLocation == "canada") {
      setLocation("canada");
      setLocationPrice(3400);
      localforage
        .setItem("location", "canada")
        .then(function () {
          // return localforage.getItem("cartData");
        })
        .then(function (value) {
          // we got our value
        })
        .catch(function (err) {
          // we got an error
        });
    }
    if (chosenLocation == "uk") {
      setLocation("uk");
      setLocationPrice(3200);
      localforage
        .setItem("location", "uk")
        .then(function () {
          // return localforage.getItem("cartData");
        })
        .then(function (value) {
          // we got our value
        })
        .catch(function (err) {
          // we got an error
        });
    }
    if (chosenLocation == "usa") {
      setLocation("usa");
      setLocationPrice(3200);
      localforage
        .setItem("location", "usa")
        .then(function () {
          // return localforage.getItem("cartData");
        })
        .then(function (value) {
          // we got our value
        })
        .catch(function (err) {
          // we got an error
        });
    }
  };

  useEffect(() => {
    TagManager.initialize({ gtmId: "G-VPV3LFJ4L6" });
    TagManager.initialize({ gtmId: "GTM-N922K6Z" });

  }, []);

  useEffect(() => {
    // declare the data fetching function
    const locationInfo = async () => {
      const location = await localforage.getItem("location");
      if (location) {
        locationChanger(location);
      } else {
        localforage
          .setItem("location", "canada")
          .then(function () {
            // return localforage.getItem("cartData");
          })
          .then(function (value) {
            // we got our value
          })
          .catch(function (err) {
            // we got an error
          });
      }
    };

    // call the function
    locationInfo()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  const isCartOpenHandler = () => {
    if (cartData.length === 0) {
      setIsCartOpen(false);
    } else {
      setIsCartOpen(true);
      if (isLoggedIn) {
        // let feedback = axios
        //   .post("/cart_store", cartData)
        //   .then((response) => {
        //     let result = response.data;
        //     console.log(result);
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
      }
    }
  };

  //console.log(isCartOpen);

  useEffect(() => {
    isCartOpenHandler();
  }, [cartData]);

  function navbar_toggler() {
    document.getElementsByClassName("links_div")[0].classList.toggle("show");
  }

  function navbar_closer() {
    let navbar = document.getElementsByClassName("links_div")[0];

    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      // navigate("/")
    }
  }, [isLoggedIn]);

  const cartFromServer = (cart) => {
    setCartData(cart);
    //console.log(cart);
  };
  //console.log(cartData);

  const signOutHandler = () => {
    let feedback = axios
      .post("/sign_out")
      .then((response) => {
        let response_code = response.data.code;
        if (response_code === "Logout-success") {
          setIsLoggedIn(false);
        }
      })
      .catch(() => {});
  };

  const dataFetcher = () => {
    axios.get("/data").then((data) => {
      setDressProData(data.data.data);
      //console.log(data.data);
      //console.log(data.data.user_data);

      if (data.data.user_data) {
        setIsLoggedIn(true);
        setUserData(data.data.user_data);
      // notify();

      }


    });
  };

  const isLoggedInHandler = () => {
    // if(isLoggedIn === false){
    setIsLoggedIn(true);
    // }
  };

  const userDataHandler = (data) => {
    // console.log(data)
   // console.log(data);
    setUserData(data);
    // console.log(data.cart_data)
    // if(data.cart_data){
    // setCartData(data.cart_data)

    // }
  };

  useEffect(() => {
    dataFetcher();
  }, []);

  useEffect(() => {
    // declare the data fetching function
    const fetchCartData = async () => {
      const cartData = await localforage.getItem("cartData");
      if (cartData) {
        setCartData(cartData);
        // console.log(cartData);
      }
    };

    // call the function
    fetchCartData()
      // make sure to catch any error
      .catch(console.error);
  }, []);
  useEffect(() => {
    localforage
      .setItem("cartData", cartData)
      .then(function () {
        // return localforage.getItem("cartData");
      })
      .then(function (value) {
        // we got our value
      })
      .catch(function (err) {
        // we got an error
      });
  }, [cartData]);
  useEffect(() => {
    if (cartData.length > 0) {
      let cartSum = cartData.reduce(
        (previousValue, currentValue) =>
          previousValue +
          (+currentValue.product_price +
            locationPrice * currentValue.product_weight) *
            currentValue.product_no_of_pieces,
        0
      );
     // console.log(cartSum);
      setCartTotal(cartSum);
    }

   // console.log(cartData);
  }, [cartData, locationPrice]);

  const addToSpecificCart = (product_id) => {
    let foundObject = cartData.find(
      (cartDataObject) => cartDataObject.product_id === product_id
    );
   // console.log(foundObject);
    let newCart = cartData.map((cartItem) => {
      if (cartItem === foundObject) {
        return {
          ...cartItem,
          product_no_of_pieces: cartItem.product_no_of_pieces + 1,
        };
      }
      return cartItem;
    });
    setCartData(newCart);
  };

  const removeFromSpecificCart = (product_id) => {
    let foundObject = cartData.find(
      (cartDataObject) => cartDataObject.product_id === product_id
    );
    let newCart = cartData.map((cartItem) => {
      if (cartItem === foundObject) {
        return {
          ...cartItem,
          product_no_of_pieces:
            cartItem.product_no_of_pieces === 0
              ? cartItem.product_no_of_pieces
              : cartItem.product_no_of_pieces - 1,
        };
      }
      return cartItem;
    });
    setCartData(newCart);
  };

  const addToCartHandler = (
    event,
    product_name,
    product_price,
    product_weight,
    product_volume,
    product_image,
    product_no_of_pieces,
    product_id,
    product_description
  ) => {
    let object = {
      product_name,
      product_price,
      product_weight,
      product_volume,
      product_image,
      product_no_of_pieces,
      product_id,
      product_description,
    };
    if (event.target.innerText === "ADD TO CART") {
      setCartData([...cartData, object]);
      event.target.innerText = "REMOVE FROM CART";
    } else {
      let newCartData = cartData.filter(
        (specificCartObject) => specificCartObject.product_id !== product_id
      );
      event.target.innerText = "ADD TO CART";
      setCartData(newCartData);
    }
    console.log(cartData);
  };

  const removeFromCart = (cartObject) => {
    let newCartData = cartData.filter(
      (specificCartObject) => specificCartObject !== cartObject
    );
    setCartData(newCartData);
  };

  if (dressProData.length === 0) {
    return (
      <>
        <div>loading</div>
      </>
    );
  }

  let new_cloth_route = dressProData.map((product_category, index) => {
    let { name } = product_category;
    let product_category_name_id = name.replace(/\s+/g, "").toLowerCase();
    return (
      <Route
        path={"/" + product_category_name_id}
        key={index}
        element={
          <Section
            product_category={product_category}
            cartData={cartData}
            addToCartHandler={addToCartHandler}
            location={location}
            locationPrice={locationPrice}
            locationChanger={locationChanger}
          />
        }
      ></Route>
    );
  });

  // let cloth_categories = data.cloth_categories;
  // let cloth_images_link = data.cloth_images_link;
  // let cloth_categories_number = data.cloth_images_link

  // let cloth_route =  cloth_categories.map((cloth_name, index) =>{
  //   let cloth_name_id = cloth_name.replace(/\s+/g, "").toLowerCase();
  //   let number_of_clothes = cloth_categories_number[index]
  //   return (
  //         <Route path={"/" + cloth_name_id} element={<Section cloth_name={cloth_name} number_of_clothes={number_of_clothes} cloth_images_link={cloth_images_link}/>}></Route>

  //   )
  // })

  return (
    <>
      <div className="space_at_the_side">
        <Navbar
          navbar_togglerProps={navbar_toggler}
          userData={userData}
          isLoggedIn={isLoggedIn}
          signOutHandler={signOutHandler}
        />
        {/* <Toaster /> */}

        {/* <ClipLoader
          color="rgb(160, 110, 127)"
          loading="true"
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
        /> */}
        <Routes>
          {/* {cloth_route} */}
          {new_cloth_route}
          <Route
            path="/store"
            element={
              <Home
                dressProData={dressProData}
                addToCartHandler={addToCartHandler}
                navbar_closer={navbar_closer}
              />
            }
          ></Route>

          {/* <Route
            path="/customer"
            element={<CustomerReview navbar_closer={navbar_closer} />}
          ></Route> */}
          {/* <Route
            path="/about"
            element={<AboutUs navbar_closer={navbar_closer} />}
          ></Route> */}

          <Route
            path="/"
            element={<HomeMain navbar_closer={navbar_closer} />}
          ></Route>

          <Route
            path="/about"
            element={<AboutUs navbar_closer={navbar_closer} />}
          ></Route>

          <Route
            path="/contact"
            element={<Contact navbar_closer={navbar_closer} />}
          ></Route>

          <Route
            path="/policy"
            element={<Policy navbar_closer={navbar_closer} />}
          ></Route>
          {/* <Route path="/faq" element={<Faq />}></Route> */}
          <Route
            path="/cart"
            element={
              <Cart
                cartData={cartData}
                cartTotal={cartTotal}
                addToSpecificCart={addToSpecificCart}
                removeFromSpecificCart={removeFromSpecificCart}
                removeFromCart={removeFromCart}
                isLoggedIn={isLoggedIn}
                userData={userData}
                location={location}
                locationPrice={locationPrice}
                locationChanger={locationChanger}
              />
            }
          ></Route>

          {!isLoggedIn && (
            <Route
              path="/sign_in"
              element={
                <SignIn
                  userDataHandler={userDataHandler}
                  isLoggedInHandler={isLoggedInHandler}
                  cartFromServer={cartFromServer}
                  navbar_closer={navbar_closer}
                />
              }
            ></Route>
          )}

          {!isLoggedIn && (
            <Route
              path="/register"
              element={<Register navbar_closer={navbar_closer} />}
            ></Route>
          )}

          {isLoggedIn && (
            <Route
              path="/manifest"
              element={
                <Manifest
                  isLoggedIn={isLoggedIn}
                  userData={userData}
                  navbar_closer={navbar_closer}
                />
              }
            ></Route>
          )}

          <Route path="/admin/login" element={<AdminPage />}></Route>
          <Route path="/verify" element={<Verify />}></Route>
          {!isLoggedIn && (
            <Route
              path="/reset-password"
              element={<ResetPassword navbar_closer={navbar_closer} />}
            ></Route>
          )}

          {!isLoggedIn && (
            <Route
              path="/forgot-password"
              element={<ForgotPassword navbar_closer={navbar_closer} />}
            ></Route>
          )}

          <Route
            path="/notifications"
            element={<Notifications navbar_closer={navbar_closer} />}
          ></Route>

          <Route
            path="/admin/change-notifications"
            element={<ChangeNotification />}
          ></Route>
          <Route
            path="/admin/add-products"
            element={<AddProduct />}
          ></Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
