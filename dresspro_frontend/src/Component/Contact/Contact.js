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
            <span className="address-div-span">Address:</span>
            <a
              href="https://goo.gl/maps/SGUrGwsGHD9xdihD9"
              className="contact-clickables"
            >
              {" "}
              NO 43, SHASHA AKOWONJO ROAD, OFF MOBIL FILLING STATION,ALIMOSHO, LAGOS
              STATE
            </a>
          </div>
          <div className="phone-div">
            <span className="phone-div-span">Phone:</span>{" "}
            <a href="tel:+2348058316087" className="contact-clickables">
              +2348058316087
            </a>
            {", "}
            <a href="tel:+2348060060590" className="contact-clickables">
              +2348060060590
            </a>
          </div>
          <div className="email-div">
            <span className="email-div-span">Email:</span>{" "}
            <a
              href="mailto:delightexpresscargo@gmail.com"
              className="contact-clickables"
            >
              delightexpresscargo@gmail.com
            </a>
          </div>
        </div>
        <div className="contact-address">
          <div className="addresstext-div">Opening Hours</div>
          <div className="address-div">
            <span className="address-div-span">Mondays -Thursdays:</span>{" "}
            Drop-off days. Occurs within the time: 9am - 4pm
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