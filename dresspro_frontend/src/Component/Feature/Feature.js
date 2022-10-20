import React from "react";
import "./Feature.css";

export default function Feature() {
  return (
    <section>
      <div className="row">
        <h1>Our Features</h1>
      </div>
      <div className="row">
        {/* <!-- Column One --> */}
        <div className="column">
          <div className="card">
            <div className="icon">
              {/* <!-- <i className="fa-solid fa-user"></i> --> */}
              <i className="fas fa-shipping-fast"></i>
            </div>
            <h3>Fast Delivery</h3>
            <p>Swift delivery on completion of production</p>
          </div>
        </div>
        {/* <!-- Column Two --> */}
        <div className="column">
          <div className="card">
            <div className="icon">
              {/* <!-- <i className="fa-solid fa-shield-halved"></i> --> */}
              <i className="fas fa-money-check-alt"></i>
            </div>
            <h3>Great Value</h3>
            <p>Great value and quality at affordable prices</p>
          </div>
        </div>
        {/* <!-- Column Three --> */}
        <div className="column">
          <div className="card">
            <div className="icon">
              {/* <!-- <i className="fa-solid fa-shield-halved"></i> --> */}
              <i className="fa-solid fa-headset"></i>
            </div>
            <h3>Customer Service</h3>
            <p>Superb and fast customer service</p>
          </div>
        </div>
      </div>
    </section>
  );
}
