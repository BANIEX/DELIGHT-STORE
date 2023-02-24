import React from 'react'
import "./HomeMain.css"
import { Link } from "react-router-dom";
import CloudinaryUploadWidget from "../CloudinaryUploadWidget/CloudinaryUploadWidget";


// import plane from "../../assets/images/plane.png"
// import container from "../../assets/images/container.png";

import img from "../../assets/images/cargo6.jpg";



const HomeMain = (props) => {
  let navbar_closer = props.navbar_closer;
  return (
    <div onClick={navbar_closer}>
      <CloudinaryUploadWidget />

      {/* classname below should be read as home_first_level depicting the layer of the div */}
      <div className="home_first">
        <div className="home_image"></div>
      </div>
      <div className="home_second">
        {/* <img className='home_image_mobile' src={img} alt="dress_pro" /> */}

        <div className="home_second_main">Shipping at the speed of light</div>
        <div className="home_second_sub">
          Fastest express cargo, focusing on serving the customer needs in the
          best possible way, creating long term business relationship.
        </div>
        <div className="home_second_button">
          <div className="home_second_button_subdiv">
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className="home_third">
        <div className="home_third_container">
          <div className="home_third_container_text">
            All shipping necessity you might have
          </div>
          <div className="home_third_container_content">
            <div className="home_third_first">
              <div className="home_third_first_image_wrapper">
                <div className="home_third_first_image"></div>
              </div>
              <div className="home_third_first_content">
                <div className="home_third_first_content_subdiv">
                  <div className="home_third_first_content_primary">
                    Air shipment
                  </div>
                  <div className="home_third_first_content_secondary">
                    Fastest shipping method of goods, via air carrier and safe
                    delivery.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home_third_container_content ">
            <div className="home_third_first second">
              <div className="home_third_first_image_wrapper">
                <div className="home_third_first_image second_image"></div>
              </div>
              <div className="home_third_first_content">
                <div className="home_third_first_content_subdiv">
                  <div className="home_third_first_content_primary">
                    Proper inspection
                  </div>
                  <div className="home_third_first_content_secondary">
                    Proper inspection of goods against contraband before transit
                    to ensure 100% success rate in delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home_third_container_content">
            <div className="home_third_first">
              <div className="home_third_first_image_wrapper">
                <div className="home_third_first_image third_image"></div>
              </div>
              <div className="home_third_first_content">
                <div className="home_third_first_content_subdiv">
                  <div className="home_third_first_content_primary">
                    Documentation
                  </div>
                  <div className="home_third_first_content_secondary">
                    Properly documented custom paper and legal works for maximum
                    protection of goods in transit and at border
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home_fourth">
        <div className="home_numbers_one">
          <div className="home_numbers_up">132000 +</div>
          <div className="home_numbers_middle"></div>
          <div className="home_numbers_down">Packages Delivered</div>
        </div>
        <div className="home_numbers_one">
          <div className="home_numbers_up">200+</div>
          <div className="home_numbers_middle"></div>
          <div className="home_numbers_down">Destination Countries</div>
        </div>
        <div className="home_numbers_one">
          <div className="home_numbers_up">10000 +</div>
          <div className="home_numbers_middle"></div>
          <div className="home_numbers_down">Customers</div>
        </div>
        <div className="home_numbers_one">
          <div className="home_numbers_up">95%</div>
          <div className="home_numbers_middle"></div>
          <div className="home_numbers_down">Customer Satisfaction Rate</div>
        </div>
      </div>
      <div className="home_fifth"></div>
    </div>
  );
}

export default HomeMain