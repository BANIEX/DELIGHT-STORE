import React from "react";
// import "./SectionBackgroundImage.scss";
import "./Section.css";
import logo from "../../../src/assets/images/about4.jpg";
import { Policy } from "../Policy/Policy";
import AddToCart from "../AddToCart/AddToCart";

const Section = (props) => {
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

  let addToCartHandler = props.addToCartHandler;
  let cartData = props.cartData;

  let cloth_object = props.cloth_object;
  let cloth_name = props.cloth_object.name;
  let cloth_price = props.cloth_object.price;
  let cloth_images_link = props.cloth_object.images;
  let cloth_name_unspaced = cloth_name.replace(/\s+/g, "").toLowerCase();
  let number_of_clothes = 20;
  let cloth_name_lowercase = cloth_name.toLowerCase();
  let addOrRemoveText = "ADD TO CART";

  const addOrRemoveFunc = (cloth_images_link_specific) => {};

  let image_divs = cloth_images_link.map((cloth_image, index) => {
    for (let i = 0; i < cartData.length; i++) {
      if (cloth_image == cartData[i].cloth_image) {
        addOrRemoveText = "REMOVE FROM CART";
        // console.log("found one")
        break;
      } else {
        addOrRemoveText = "ADD TO CART";
      }
    }

    if (addOrRemoveText) {
      // addOrRemoveText = "ya trip"
    }

    return (
      <div
        className="section_image_container"
        // onMouseEnter={mouse_hover}
        // onMouseLeave={mouse_leave}
      >
        <div>
          <div
            // Note that there is a space in the classname below hence it has two individual class

            className={
              "section_image " + cloth_name_unspaced + "_image" + index
            }
            style={{
              backgroundImage: "url(" + cloth_image + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="section_image_hover" style={{ display: "block", width: "95%" }}>
            {/* <div className="image_identity">{cloth_name_unspaced + index}</div> */}
            <div
              className="buy_now"
              style={{ textAlign: "center" }}
              onClick={(event) => {
                addToCartHandler(event, cloth_image, cloth_name, cloth_price);
              }}
            >
              {addOrRemoveText}
            </div>
            <div className="price_weight">
              <span>Price: N2100</span>
              <span>Weight: 30kg</span>
            </div>
            {/* <div>
              Yellow Garri | crunchy yellow garri for you to enjoy your life
            </div> */}
            <div className="price_weight">
              <span>
                Yellow Garri Crunchy yellow garri for you to enjoy your life. Soak away you sorrow with this ijebu garri
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="section_info">
        <div className="section_nav_display">Products &gt; {cloth_name} </div>
        <div className="section_text_display">{cloth_name}</div>
      </div>

      <div className="section_image_section">{image_divs}</div>
    </div>
  );
};

export default Section;
