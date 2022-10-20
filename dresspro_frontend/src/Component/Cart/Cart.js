import React from "react";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PaystackButton, usePaystackPayment } from "react-paystack";
import "./Cart.css";
import { useState } from "react";

const Cart = (props) => {
  let cartData = props.cartData;
  let cartTotal = props.cartTotal;
  let addToSpecificCart = props.addToSpecificCart;
  let removeFromSpecificCart = props.removeFromSpecificCart;
  let removeFromCart = props.removeFromCart;
  let isLoggedIn = props.isLoggedIn;
  let userData = props.userData 

  console.log(userData)

  const receiverFirstNameRef = useRef("");
  const receiverLastNameRef = useRef("");
  const receiverPhoneNumberRef = useRef("");
  const receiverEmailRef = useRef("");
  const receiverCountryRef = useRef("canada");

  const [message, setMessage] = useState("Kindly fill this form");



  //  let  receiverFirstName = receiverFirstNameRef.current.value
  //  let  receiverLastName = receiverLastNameRef.current.value
  //  let receiverPhoneNumber = receiverPhoneNumberRef.current.value
  //  let receiverEmail =  receiverEmailRef.current.value
  //  let receiverCountry = receiverCountryRef.current.value


   
  // console.log(receiverDetails);

  
  const {email, first_name, last_name} = userData
  console.log(email, first_name)

  const checkout_store_data = {email, first_name, cartData}

  const [paystackParams, setPaystackParams] = useState({
    // publicKey: "pk_test_5db88aea78d0c7d3cebbf3475a9621a3dceca439",
    publicKey: "pk_live_3f345e3d221afc664779360accfc29db7b258e00",
    email: email,
    amount: cartTotal * 100,
    metadata: {
      name: `${first_name} ${last_name}`,
    },
  });

  let paystackParamsB = {
    publicKey: "pk_test_5db88aea78d0c7d3cebbf3475a9621a3dceca439",
    // publicKey: "pk_live_3f345e3d221afc664779360accfc29db7b258e00",
    email: email,
    amount: cartTotal * 100,
    metadata: {
      name: `${first_name} ${last_name}`,
    }
  }

  const receiverDetailsChecker = () => {

    
   let receiverFirstName = receiverFirstNameRef.current.value;
   let receiverLastName = receiverLastNameRef.current.value;
   let receiverPhoneNumber = receiverPhoneNumberRef.current.value;
   let receiverEmail = receiverEmailRef.current.value;
   let receiverCountry = receiverCountryRef.current.value;
    if(receiverFirstName.length === 0){
      return false;

    }
    if(receiverLastName.length === 0){
      return false;

    }
    if(receiverPhoneNumber.length === 0){
      return false;

    }
    if(receiverEmail.length === 0){
      return false;

    }
    if(receiverCountry.length === 0){
      return false;

    }
    return true;
  }



  const initializePayment = usePaystackPayment(paystackParamsB);

  

  const navigate = useNavigate();

  const handlePaymentClick = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      return navigate("/sign_in");
    }

    if (!receiverDetailsChecker()) {
      return window.location.replace("/cart/#cart");
    }

    // go to paystack

    

    initializePayment(onPaymentSuccess, onClose);
  };

  const onPaymentSuccess = () => {
    // alert("Thanks for doing business with us! Come back soon!!");

    let receiverFirstName = receiverFirstNameRef.current.value;
    let receiverLastName = receiverLastNameRef.current.value;
    let receiverPhoneNumber = receiverPhoneNumberRef.current.value;
    let receiverEmail = receiverEmailRef.current.value;
    let receiverCountry = receiverCountryRef.current.value;

    let receiverDetails = { receiverFirstName, receiverLastName, receiverPhoneNumber, receiverEmail, receiverCountry}

  const checkout_store_data = { email,cartData, receiverDetails };

    let feedback = axios
    .post("/checkout_store", checkout_store_data)
    .then((result)=>{
      console.log(result)
    })
    .catch(()=>{})
  };

  const onClose = () => alert("Wait! You need this oil, don't go!!!!");

  console.log(cartData);

  if (cartData.length === 0) {
    return <div>Empty Cart. Kindly Add to Cart</div>;
  }

  let cartDataDiv = cartData.map((cartObject, index) => {
    const mouse_hover = (event) => {
      event.currentTarget.querySelector(".section_image_hover").style.display =
        "block";
      // console.log("hello")
    };

    const mouse_leave = (event) => {
      event.currentTarget.querySelector(".section_image_hover").style.display =
        "none";
      // console.log("hello");
    };

    let cloth_name = cartObject.cloth_name;
    let cloth_image = cartObject.cloth_image;
    let no_of_pieces = cartObject.no_of_pieces;
    let cloth_price = cartObject.cloth_price;
    let cloth_name_unspaced = cloth_name.replace(/\s+/g, "").toLowerCase();

    return (
      <div className="cart-specific" key={index}>
        <hr />
        <div className="cart-specific-top">
          <div className="cart-specific-top-left">
            <div className="cart-specific-top-left-content">
              <img className="cart-img" alt="cart-img" src={cloth_image}></img>
              {/* <div className="cart-name">{cloth_name}</div> */}
              {/* <div className="cart-name">Yellow Garri</div> */}
              <div className="cart-name">
                <span>Yellow Garri</span>
                <br/>
                <span>Crunchy yellow garri to enjoy your life</span>
              </div>
            </div>
          </div>
          <div className="cart-specific-top-right">N{cloth_price}</div>
        </div>
        <div className="cart-specific-bottom">
          <div>
            <div
              onClick={() => {
                removeFromCart(cartObject);
              }}
            >
              Remove
            </div>
            <div style={{ display: "none" }}>Save for later</div>
          </div>
          <div>
            <span
              onClick={() => {
                removeFromSpecificCart(cloth_image);
              }}
            >
              -
            </span>
            <span>{no_of_pieces}</span>
            <span
              onClick={() => {
                addToSpecificCart(cloth_image);
              }}
            >
              +
            </span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="section_info top_of_cart">
        <div
          className="section_text_display cart-text"
          style={{ fontSize: "1.9rem" }}
        >
          CART
        </div>
      </div>
      <div className="cart-page">
        <div className="cart-container" id="cart">
          {/* <div className="cart-specific">
            <hr />
            <div className="cart-specific-top">
              <div className="cart-specific-top-left">
                <div className="cart-specific-top-left-content">
                  <img
                    className="cart-img"
                    alt="cart-img"
                    src="https://i.im.ge/2022/09/08/Oftta8.RENAME-36.jpg"
                  ></img>
                  <div className="cart-name">Smocked Top</div>
                </div>
              </div>
              <div className="cart-specific-top-right">N3000</div>
            </div>
            <div className="cart-specific-bottom">
              <div>
                <div>Remove</div>
                <div>Save for later</div>
              </div>
              <div>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
            </div>
          </div> */}
          {cartDataDiv}
        </div>
        <div className="checkout-container">
          {/* <div className="form"> */}
          <p>RECEIVER DETAILS</p>
          <p>{message}</p>
          <label for="fname">First Name:</label>
          <input
            type="text"
            placeholder="First name"
            className="receiver"
            ref={receiverFirstNameRef}
          />
          <br />
          <label for="fname">Last Name:</label>

          <input
            type="text"
            placeholder="Last name"
            className="receiver"
            ref={receiverLastNameRef}
          />
          <br />
          <label for="fname">Phone Number:</label>

          <input
            type="tel"
            placeholder="Phone Number"
            className="receiver"
            ref={receiverPhoneNumberRef}
          />
          <br />
          <label for="fname">Email: </label>

          <input
            type="email"
            placeholder="Email address"
            className="receiver"
            ref={receiverEmailRef}
          />
          <br />
          <label for="fname">Country: </label>

          <select
            id="country"
            name="country"
            className="receiver"
            ref={receiverCountryRef}
          >
            <option value="canada">Canada</option>
            <option value="uk">United Kingdom</option>
            <option value="usa">USA</option>
          </select>

          {/* </div> */}
          <br />
          <br />
          <br />

          <div className="checkout-continue">
            <span onClick={handlePaymentClick}>Proceed to checkout!</span>
          </div>
          <br />
          <hr />
          <div className="subtotal-checkout">
            <span>Subtotal:</span>
            <span>N{cartTotal}</span>
          </div>
          <br />
          <div style={{ fontSize: "10px" }}>Delivery fees not included yet</div>
          <hr />
          <div className="estimated-total-checkout">
            <span>Estimated Total:</span>
            <span>N{cartTotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
