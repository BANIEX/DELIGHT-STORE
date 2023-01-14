import React from 'react'
import "./Notifications.css"
import img from "../../assets/images/cargo6.jpg";


const Notifications = () => {
  return (
    <div>
      {/* <header>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container">
				<a class="navbar-brand" href="#">Navbar</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item">
							<a class="nav-link" href="#">Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">About</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Contact</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Login</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Signup</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header> */}

      <section class="section-50">
        <div class="container">
          <h3 class="m-b-50 heading-line">Notifications</h3>

          <div class="notification-ui_dd-content">
            {/* Unread messages categories "notification-list--unread"*/}

            {/* <div class="notification-list notification-list--unread">
					<div class="notification-list_content">
						<div class="notification-list_img">
							<img src="images/users/user1.jpg" alt="user">
						</div>
						<div class="notification-list_detail">
							<p><b>John Doe</b> reacted to your post</p>
							<p class="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, dolorem.</p>
							<p class="text-muted"><small>10 mins ago</small></p>
						</div>
					</div>
					<div class="notification-list_feature-img">
						<img src="images/features/random1.jpg" alt="Feature image">
					</div>
				</div>
				<div class="notification-list notification-list--unread">
					<div class="notification-list_content">
						<div class="notification-list_img">
							<img src="images/users/user2.jpg" alt="user">
						</div>
						<div class="notification-list_detail">
							<p><b>Richard Miles</b> liked your post</p>
							<p class="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, dolorem.</p>
							<p class="text-muted"><small>10 mins ago</small></p>
						</div>
					</div>
					<div class="notification-list_feature-img">
						<img src="images/features/random2.jpg" alt="Feature image">
					</div>
				</div> */}

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
                      Our Sea Cargo shipping moves from 10th January - 15th
                      January
                    </b>
                  </p>
                  {/* <p class="text-muted"><small>10 mins ago</small></p> */}
                </div>
              </div>
              <div class="notification-list_feature-img">
                {/* <img src="images/features/random3.jpg" alt="Feature image"> */}
              </div>
            </div>
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
                      Goods that left Nigeria on the 15th of January are
                      expected to arive on the 22nd of January
                    </b>
                  </p>
                  {/* <p class="text-muted"><small>10 mins ago</small></p> */}
                </div>
              </div>
              <div class="notification-list_feature-img">
                {/* <img src="images/features/random3.jpg" alt="Feature image"> */}
              </div>
            </div>
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
                      Goods that left Nigeria on the 15th of January are
                      expected to arive on the 22nd of January
                    </b>
                  </p>
                  {/* <p class="text-muted"><small>10 mins ago</small></p> */}
                </div>
              </div>
              <div class="notification-list_feature-img">
                {/* <img src="images/features/random3.jpg" alt="Feature image"> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Notifications


