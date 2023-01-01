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
      <div className="home_third"></div>
      <div className="home_fourth"></div>
      <div className="home_fifth"></div>
    </div>
  );
}

export default HomeMain