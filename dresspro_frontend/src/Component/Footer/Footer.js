import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_top">
          <div className="footer_one">
            <div className="footer_about">
              <div className="footer_about_heading">ABOUT</div>
              <div className="footer_about_story">
                Delight Express Cargo helps you to send and receive packages in
                and out of the country to anywhere in the world at very
                affordable rates
              </div>
            </div>
          </div>
          <div className="footer_two">
            {/* <div className="footer_categories">
              <div className="footer_categories_heading">CATEGORIES</div>
              <div className="footer_categories_group_links">
                <div className="footer_categories_specific_links">
                  <a href="./smocked_tops/smocked_tops.html">Smocked Tops</a>
                </div>

                <div className="footer_categories_specific_links">
                  <a href="./ruched_dresses/ruched_dresses.html">
                    Ruched Dress
                  </a>
                </div>
                <div className="footer_categories_specific_links">
                  <a href="./wrap_tops/wrap_tops.html">Wrap Tops</a>
                </div>
                <div className="footer_categories_specific_links">
                  <a href="./mini_skirts/mini_skirts.html">Mini Skirts</a>
                </div>
                <div className="footer_categories_specific_links">
                  <a href="./satin_dress_lace/satin_dress_lace.html">
                    Satin Dress
                  </a>
                </div>
                <div className="footer_categories_specific_links">
                  <a href="./two_pieces/two_pieces.html">Two Pieces</a>
                </div>
              </div>
            </div> */}
            <div className="footer_quicklinks">
              <div className="footer_quicklinks_heading">Developer: </div>
              <div className="footer_quicklinks_group_links">
                <div className="footer_quicklinks_specific_links">
                  <a href="https://wa.me/2349061814601">Whatsapp{"  "}</a>
                </div>
                <div className="footer_quicklinks_specific_links">
                  <a href="https://www.instagram.com/banjibaniex">
                    Instagram{"  "}
                  </a>
                </div>
                {/* <div className="footer_quicklinks_specific_links">
                  <a href="about_us.html">About Us</a>
                </div> */}
                {/* <div className="footer_quicklinks_specific_links">
                  <a href="company_policy.html">Company Policy</a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="footer_three">
            <div className="footer_horizontal_line"></div>
          </div>
          <div className="footer_four">
            <div className="footer_copyright">
              Copyright © 2022 All Rights Reserved by
              <strong>
                <a
                  href="https://www.instagram.com/delightexpresscargo/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  Delight Express
                </a>
              </strong>
            </div>
            <div className="footer_socialmedia">
              <div className="footer_socialmedia_group_links">
                <div className="footer_socialmedia_specific_links">
                  <div className="footer_instagram">
                    <a
                      href="https://www.instagram.com/delightexpresscargo"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="footer_socialmedia_specific_links">
                  <div className="footer_twitter">
                    <a href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <div className="footer_socialmedia_specific_links">
                  <div className="footer_facebook">
                    <a href="">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
