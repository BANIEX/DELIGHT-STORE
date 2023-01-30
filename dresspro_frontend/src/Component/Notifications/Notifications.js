import React, {useState, useEffect }from 'react';
import axios from 'axios';
import "./Notifications.css"
import img from "../../assets/images/cargo6.jpg";


const Notifications = (props) => {
  const initialNotificationData = [
    { id: 0, text: "Our Sea Cargo shipping moves from 10th January - 15th January" },
    { id: 1, text: "Goods that left Nigeria on the 15th of January are expected to arive on the 22nd of January" },
    { id: 2, text:  "Goods that left Nigeria on the 15th of January are expected to arive on the 22nd of January"},
  ];

  const [notificationData, setNotificationData] = useState(
    initialNotificationData
  );


  const notificationDataFetcher = () => {
    axios.get("/notification").then((data) => {
      setNotificationData(data.data.data);
      console.log(data.data);
      // console.log(data.data.user_data);

      if (data.data.user_data) {
        // notify();
      }
    });
  };


  useEffect(()=>{
    notificationDataFetcher()
  }, [])




  let navbar_closer = props.navbar_closer;


  return (
    <div onClick={navbar_closer}>
      <section class="section-50">
        <div class="container">
          <h3 class="m-b-50 heading-line">Notifications</h3>

          <div class="notification-ui_dd-content">
            {notificationData.map((specificNotificationData) => (
              <div class="notification-list">
                <div class="notification-list_content">
                  <div class="notification-list_img">
                    {/* <img src={img} alt="user"/> */}
                  </div>
                  <div class="notification-list_detail">
                    <p>
                      <b>Delight Express Cargo</b> :
                    </p>
                    <p
                      class="text-muted delight-notification-text"
                      style={{
                        fontSize: "13px",
                      }}
                    >
                      <b>
                        {specificNotificationData.text}
                      </b>
                    </p>
                    {/* <p class="text-muted"><small>10 mins ago</small></p> */}
                  </div>
                </div>
                <div class="notification-list_feature-img">
                  {/* <img src="images/features/random3.jpg" alt="Feature image"> */}
                </div>
              </div>
            ))}

            {/* <div class="notification-list">
              <div class="notification-list_content">
                <div class="notification-list_img">
                  <img src={img} alt="user"/>
                </div>
                <div class="notification-list_detail">
                  <p>
                    <b>Delight Express Cargo</b> :
                  </p>
                  <p
                    class="text-muted delight-notification-text"
                    style={{
                      fontSize: "13px",
                    }}
                  >
                    <b></b>
                  </p>
                  <p class="text-muted"><small>10 mins ago</small></p>
                </div>
              </div>
              <div class="notification-list_feature-img">
                <img src="images/features/random3.jpg" alt="Feature"/>
              </div>
            </div> */}
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Notifications


