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
            <span className="address-div-span">Address:</span> NO 43, SHASHA AKOWONJO, OFF MOBIL FILLING STATTION, LAGOS
          </div>
          <div className="phone-div">
            <span className="phone-div-span">Phone:</span> +2348058316087
          </div>
          <div className="email-div">
            <span className="email-div-span">Email:</span>{" "}
            delightexpresscargo@gmail.com
          </div>
        </div>
        <div className="contact-address">
          <div className="addresstext-div">Opening Hours</div>
          <div className="address-div">
            <span className="address-div-span">Mondays -Thursdays:</span>{" "}
            Drop-off days. Occurs within the time 10am - 3pm
          </div>
          <div className="phone-div">
            <span className="phone-div-span">Fridays:</span> Handling over of
            consignments to airline, 9:30am
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact