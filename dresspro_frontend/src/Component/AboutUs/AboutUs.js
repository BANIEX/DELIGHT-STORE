import React from "react";
import "./AboutUs.css";
import img from "../../assets/images/cargo6.jpg";

export default function AboutUs(props) {
  let navbar_closer = props.navbar_closer;

  return (
    <div onClick={navbar_closer}>
      <div className="about_us_info">
        {/* <div className="about_us_nav_display">Home &gt; About Us</div> */}
        <div className="about_us_nav_display">About Us</div>
      </div>

      <div className="about_us_first_half">
        <div className="about_us_first_half_header">ABOUT US</div>
        <div className="about_us_first_half_content">
          Delight Express Cargo is a Cargo and logistics company. We help our
          customers send and receive goods and packages in and out of the
          country at the best rate possible. We also make sure your goods are delivered as swift as possible
        </div>
        <div className="about_us_first_half_image">
          <img src={img} alt="dress_pro" />
        </div>
      </div>

      <div className="about_us_second_half">
        <div className="about_us_second_half_top">
          <div className="about_us_second_half_header">OVERVIEW</div>
        </div>
        <div className="about_us_second_half_bottom">
          <div className="about_us_second_half_left">
            <div className="about_us_second_half_left_image_container"></div>
          </div>
          <div className="about_us_second_half_right">
            With our dedicated team of professionals and years of experience
            handling packages. We make sure your packages are handled with the
            best of care, the documentation is well handled and our
            communication process is very clean.  We are honest and trustworthy and leave no room
            for complacency. We are keen on giving our customers the best
            services they deserve. Over the years we have handled over fifty
            thousand pacakages sent and receive across the borders of numerous
            countries in the globe, expanding and making sure our customers get
            the best of services at the very best rate in the shortest time.
          </div>
        </div>
      </div>
    </div>
  );
}
