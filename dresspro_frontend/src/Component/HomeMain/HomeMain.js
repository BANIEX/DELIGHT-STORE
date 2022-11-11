import React from 'react'
import "./HomeMain.css"
import plane from "../../assets/images/plane.png"
import container from "../../assets/images/container.png";


const HomeMain = () => {
  return (
    <div>
      <div className="home_first">
        <div className="home_first_left">
          <div className="home_first_left_up">
            Shipping At the Speed Of Light.
          </div>
          <div className="home_first_left_down">
            Fastest express cargo, focusing on serving the customer needs in the
            best possible way, creating long term business relationship.
          </div>
        </div>
        <div className="home_first_right">
          <img src={container} alt="delight_image" />
        </div>
      </div>
      <div className="home_second">
        <div className="home_second_up">
          <div className="home_second_up_text">
            All Shipping Necessity You Might Have.
          </div>

          <div className="home_second_up_line"></div>
        </div>
        <br />

        <div className="home_second_down">
          <div className="home_second_down_box">
            <div className="box-left">
              <div className="box-left-image"></div>
            </div>
            <div className="box-right">
              <div className="box-right-subcontainer">
                <div className="box-right-up">Air Shipment</div>
                <div className="box-right-down">
                  Fastest shipping method of goods, via air carrier and safe
                  delivery.
                </div>
              </div>
            </div>
          </div>
          <div className="home_second_down_box">
            <div className="box-left">
              <div className="box-left-image"></div>
            </div>
            <div className="box-right">
              <div className="box-right-subcontainer">
                <div className="box-right-up">Proper Inspection</div>
                <div className="box-right-down">
                  Here in delight express cargo, inspection of goods is a top
                  priority, goods are inspected properly and thoroughly..
                </div>
              </div>
            </div>
          </div>
          <div className="home_second_down_box">
            <div className="box-left">
              <div className="box-left-image"></div>
            </div>
            <div className="box-right">
              <div className="box-right-subcontainer">
                <div className="box-right-up">Documentation</div>
                <div className="box-right-down">
                  A freight forwarder will the handle the documrntation and
                  custom clearence process..
                </div>
              </div>
            </div>
          </div>
          <div className="home_second_down_box">
            <div className="box-left">
              <div className="box-left-image"></div>
            </div>
            <div className="box-right">
              <div className="box-right-subcontainer">
                <div className="box-right-up">Custom Clearance</div>
                <div className="box-right-down">
                  Alll goods that are shipped overseas,must pass through customs
                  before they are permitted to enter or leave a country
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home_numbers">
        
        <div className="home_numbers_specific">
          <div className="home_numbers_specific_number">12000+</div>
          <div className="home_numbers_specific_line"></div>
          <div className="home_numbers_specific_anonymous"></div>
          <div className="home_numbers_specific_name">PACKAGES</div>
        </div>
        <div className="home_numbers_specific">
          <div className="home_numbers_specific_number">13+</div>
          <div className="home_numbers_specific_line"></div>
          <div className="home_numbers_specific_anonymous"></div>
          <div className="home_numbers_specific_name">DESTINATIONS</div>
        </div>
        <div className="home_numbers_specific">
          <div className="home_numbers_specific_number">6000+</div>
          <div className="home_numbers_specific_line"></div>
          <div className="home_numbers_specific_anonymous"></div>
          <div className="home_numbers_specific_name">CUSTOMERS</div>
        </div>
      </div>
    </div>
  );
}

export default HomeMain