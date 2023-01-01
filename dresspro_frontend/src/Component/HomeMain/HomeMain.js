import React from 'react'
import "./HomeMain.css"
// import plane from "../../assets/images/plane.png"
// import container from "../../assets/images/container.png";

import img from "../../assets/images/cargo6.jpg";



const HomeMain = () => {
  return (
    <div>
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
          <div className="home_second_button_subdiv">Contact Us</div>
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
                    delivery. Shipping at the speed of light Fastest shipping
                    method of goods, via air carrier and safe delivery_Shipping
                    at the speed of light
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
                    Air shipment
                  </div>
                  <div className="home_third_first_content_secondary">
                    Fastest shipping method of goods, via air carrier and safe
                    delivery. Shipping at the speed of light Fastest shipping
                    method of goods, via air carrier and safe delivery_Shipping
                    at the speed of light
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
                    Air shipment
                  </div>
                  <div className="home_third_first_content_secondary">
                    Fastest shipping method of goods, via air carrier and safe
                    delivery. Shipping at the speed of light Fastest shipping
                    method of goods, via air carrier and safe delivery_Shipping
                    at the speed of light
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home_fourth"></div>
      <div className="home_fifth"></div>
    </div>
  );
}

export default HomeMain