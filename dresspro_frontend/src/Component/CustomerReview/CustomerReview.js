import React from "react";
import "./CustomerReview.css";

export default function CustomerReview(props) {

  let navbar_closer = props.navbar_closer;

  return (
    <div className="customer_review_content_wrapper" onClick={navbar_closer}>
      <div className="customer_review_content_sub_wrapper">
        <div className="customer_review_content_head">
          <div className="customer_review_content_top_header">
            Read what our customers say
          </div>
          <div className="customer_review_content_top_sub_header">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
        </div>
        <div className="customer_review_content_body">
          <div className="customer_review_content_personal">
            <div className="left">
              <div className="image_container"></div>
            </div>
            <div className="right">
              <div className="story">
                Proin sed libero enim sed faucibus turpis. At imperdiet dui
                accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla
                pharetra diam sit amet nisl.
              </div>
              <div className="name">Celia Almeda</div>
              <div className="role">Student</div>
            </div>
          </div>
          <div className="customer_review_content_personal">
            <div className="left">
              <div className="image_container"></div>
            </div>
            <div className="right">
              <div className="story">
                Proin sed libero enim sed faucibus turpis. At imperdiet dui
                accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla
                pharetra diam sit amet nisl.
              </div>
              <div className="name">Celia Almeda</div>
              <div className="role">Student</div>
            </div>
          </div>
          <div className="customer_review_content_personal">
            <div className="left">
              <div className="image_container"></div>
            </div>
            <div className="right">
              <div className="story">
                Proin sed libero enim sed faucibus turpis. At imperdiet dui
                accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla
                pharetra diam sit amet nisl.
              </div>
              <div className="name">Celia Almeda</div>
              <div className="role">Student</div>
            </div>
          </div>
          <div className="customer_review_content_personal">
            <div className="left">
              <div className="image_container"></div>
            </div>
            <div className="right">
              <div className="story">
                Proin sed libero enim sed faucibus turpis. At imperdiet dui
                accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla
                pharetra diam sit amet nisl.
              </div>
              <div className="name">Celia Almeda</div>
              <div className="role">Student</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
