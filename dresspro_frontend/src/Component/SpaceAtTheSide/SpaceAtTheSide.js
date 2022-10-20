import "./SpaceAtTheSide.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Swiper, SwiperSlide } from "swiper/react";
import { useBeforeunload } from "react-beforeunload";
import Specific from "../Specific/Specific";
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
  const navigate = useNavigate();

  
  const override: CSSProperties = {
    display: "block",
    position: "absolute",
    top: "55px",
    left: "40px",
    // height: "20px",
    
    margin: "0 auto",
    borderColor: "rgb(160, 110, 127)",
    zIndex: "60"
  };

  const isCartOpenHandler = () => {
    if (cartData.length === 0) {
      setIsCartOpen(false);
    } else {
      setIsCartOpen(true);
      if(isLoggedIn){
        let feedback = axios
          .post("/cart_store", cartData)
          .then((response) => {
            let result = response.data;
            console.log(result);
          })
          .catch((error) => {
            console.log(error);
          });

      }
      

    }
  };

  console.log(isCartOpen);

  useEffect(() => {
    isCartOpenHandler();
  }, [cartData]);

  function navbar_toggler() {
    document.getElementsByClassName("links_div")[0].classList.toggle("show");
  }

  function navbar_closer(){

    let navbar = document.getElementsByClassName("links_div")[0];

    if (navbar.classList.contains("show")){
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
    console.log(cart)
  };
  console.log(cartData)

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
      console.log(data.data);
      console.log(data.data.user_data);

      if (data.data.user_data) {
        setIsLoggedIn(true);
        setUserData(data.data.user_data);
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
    console.log(data);
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
          previousValue + currentValue.cloth_price * currentValue.no_of_pieces,
        0
      );
      console.log(cartSum);
      setCartTotal(cartSum);
    }

    console.log(cartData);
  }, [cartData]);

  const addToSpecificCart = (cloth_image) => {
    console.log(cloth_image);
    let foundObject = cartData.find(
      (cartDataObject) => cartDataObject.cloth_image === cloth_image
    );
    console.log(foundObject);
    let newCart = cartData.map((cartItem) => {
      if (cartItem === foundObject) {
        return { ...cartItem, no_of_pieces: cartItem.no_of_pieces + 1 };
      }
      return cartItem;
    });
    setCartData(newCart);
  };

  const removeFromSpecificCart = (cloth_image) => {
    let foundObject = cartData.find(
      (cartDataObject) => cartDataObject.cloth_image === cloth_image
    );
    let newCart = cartData.map((cartItem) => {
      if (cartItem === foundObject) {
        return {
          ...cartItem,
          no_of_pieces:
            cartItem.no_of_pieces === 0
              ? cartItem.no_of_pieces
              : cartItem.no_of_pieces - 1,
        };
      }
      return cartItem;
    });
    setCartData(newCart);
  };

  const addToCartHandler = (event, cloth_image, cloth_name, cloth_price) => {
    let object = {
      cloth_name,
      cloth_image,
      cloth_price,
      no_of_pieces: 1,
    };
    if (event.target.innerText === "ADD TO CART") {
      setCartData([...cartData, object]);
      event.target.innerText = "REMOVE FROM CART";
    } else {
      let newCartData = cartData.filter(
        (specificCartObject) => specificCartObject.cloth_image !== cloth_image
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

  let new_cloth_route = dressProData.map((cloth_object, index) => {
    let { name } = cloth_object;
    let cloth_name_id = name.replace(/\s+/g, "").toLowerCase();
    return (
      <Route
        path={"/" + cloth_name_id}
        key={index}
        element={
          <Section
            cloth_object={cloth_object}
            cartData={cartData}
            addToCartHandler={addToCartHandler}
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
            path="/"
            element={
              <Home
                dressProData={dressProData}
                addToCartHandler={addToCartHandler}
                navbar_closer={navbar_closer}
              />
            }
          ></Route>

          <Route
            path="/customer"
            element={<CustomerReview navbar_closer={navbar_closer} />}
          ></Route>
          <Route
            path="/about"
            element={<AboutUs navbar_closer={navbar_closer} />}
          ></Route>
          <Route
            path="/policy"
            element={<Policy navbar_closer={navbar_closer} />}
          ></Route>
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
              />
            }
          ></Route>
          <Route
            path="/sign_in"
            element={
              <SignIn
                userDataHandler={userDataHandler}
                isLoggedInHandler={isLoggedInHandler}
                cartFromServer={cartFromServer}
              />
            }
          ></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/manifest"
            element={<Manifest isLoggedIn={isLoggedIn} userData={userData} />}
          ></Route>
          <Route path="/admin/login" element={<AdminPage />}></Route>
          <Route path="/verify" element={<Verify />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}
