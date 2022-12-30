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

  let location = props.location;
  let locationPrice = props.locationPrice;
  let locationChanger = props.locationChanger;

  let product_category = props.product_category;
  let product_category_products = product_category.products;
  let product_category_name = props.product_category.name;
  let product_category_name_unspaced = product_category_name.replace(/\s+/g, "").toLowerCase();
  let number_of_clothes = 20;
  let product_category_name_lowercase = product_category_name.toLowerCase();
  let addOrRemoveText = "ADD TO CART";

  const addOrRemoveFunc = (cloth_images_link_specific) => {};

  let image_divs = product_category_products.map((specifc_product, index) => {

    let {product_name} = specifc_product;
    let { product_price } = specifc_product;
    let { product_weight } = specifc_product;
    let { product_volume } = specifc_product;
    let { product_image } = specifc_product;
    let { product_description } = specifc_product;
    let { product_no_of_pieces } = specifc_product;
    let { product_id } = specifc_product;








    for (let i = 0; i < cartData.length; i++) {
      if (product_id == cartData[i].product_id) {
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
              "section_image " +
              product_category_name_unspaced +
              "_image" +
              index
            }
            style={{
              backgroundImage: "url(" + product_image + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className="section_image_hover"
            style={{ display: "block", width: "95%" }}
          >
            {/* <div className="image_identity">{cloth_name_unspaced + index}</div> */}
            <div
              className="buy_now"
              style={{ textAlign: "center" }}
              onClick={(event) => {
                addToCartHandler(
                  event,
                  product_name,
                  product_price,
                  product_weight,
                  product_volume,
                  product_image,
                  product_no_of_pieces,
                  product_id
                );
              }}
            >
              {addOrRemoveText}
            </div>
            <div className="price_weight">
              <span>Price: N{ + product_price + locationPrice}</span>
              {product_volume.length > 0 ? (
                <span>Volume: {product_volume}</span>
              ) : (
                <span>Weight: {product_weight}Kg</span>
              )}
            </div>
            {/* <div>
              Yellow Garri | crunchy yellow garri for you to enjoy your life
            </div> */}
            <div className="price_weight">
              <span>{product_description}</span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="section_info">
        <div className="section_nav_display">
          Products &gt; {product_category_name}{" "}
        </div>
        <div className="section_text_display">{product_category_name}</div>
        <div>
          <label for="fname">Destination Country: </label>
          <select
            id="country"
            name="country"
            className=""
            value={location}
            onChange={(event) => {
              locationChanger(event.target.value);
              console.log(event.target.value)
            }}
          >
            <option value="canada">Canada</option>
            <option value="uk">United Kingdom</option>
            <option value="usa">USA</option>
          </select>
          <br />
          <br />
        </div>
      </div>

      <div className="section_image_section">{image_divs}</div>
    </div>
  );
};

export default Section;
