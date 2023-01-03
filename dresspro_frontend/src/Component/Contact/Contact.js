import React from 'react'
import "./Contact.css"

const Contact = (props) => {

  let navbar_closer = props.navbar_closer;
  return (
    <div onClick={navbar_closer}>
      <div className="contact-firstdiv"></div>
      <div className="contact-seconddiv">Our Locations</div>
      <div className="contact-thirddiv">
        <div className="contact-address">
          <div className="addresstext-div">Address</div>
          <div className="address-div">
            <span className="address-div-span">Address:</span> NO 43, SHASHA
            AKOWONJO ROAD, OFF MOBIL FILLING STATION, LAGOS STATE
          </div>
          <div className="phone-div">
            <span className="phone-div-span">Phone:</span>{" "}
            <a href="tel:+2348058316087">+2348058316087</a>
            {", "}
            <a href="tel:+2348060060590 ">+2348060060590</a>
          </div>
          <div className="email-div">
            <span className="email-div-span">Email:</span>{" "}
            <a href="mailto:delightexpresscargo@gmail.com">
              delightexpresscargo@gmail.com
            </a>
          </div>
        </div>
        <div className="contact-address">
          <div className="addresstext-div">Opening Hours</div>
          <div className="address-div">
            <span className="address-div-span">Mondays -Thursdays:</span>{" "}
            Drop-off days. Occurs within the time: 9am - 3pm
          </div>
          <div className="phone-div">
            <span className="phone-div-span">Fridays:</span> Handling over of
            consignments to airline: 9:30am
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact