import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  let navbar_toggler = props.navbar_togglerProps;
  let isLoggedIn = props.isLoggedIn;
  let userData = props.userData;
  let signOutHandler = props.signOutHandler;

  //  console.log(userData)

  let loggedInOrNot;
  if (isLoggedIn === true) {
    loggedInOrNot = (
      <span className="links mobile-name">Hi {userData.first_name}</span>
    );
  } else {
    loggedInOrNot = (
      <Link to="/sign_in" className="links mobile-name">
        Sign in
      </Link>
    );
  }

  let loggedInOrNotDesktop;
  if (isLoggedIn === true) {
    loggedInOrNotDesktop = (
      <div className="dropdown">
        <span className="dropbtn">
          <i className="fa fa-user" /> {userData.first_name}
        </span>
        <div className="dropdown-content">
          <Link to="/" onClick={signOutHandler}>
            Sign Out
          </Link>
          {/* <Link className='sign_out_desktop'>Sign Out</Link> */}
        </div>
      </div>
    );
  } else {
    loggedInOrNotDesktop = (
      <Link to="/sign_in">
        <i className="fa fa-user" /> Sign In
      </Link>
    );
  }

  return (
    <nav>
      <div className="brand_and_toggle">
        <div className="brand_name">DELIGHT </div>
        <div className="cc">
          <div className="social mobile">
            {/* <Link to="/cart">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
            </Link> */}
          </div>
          <div className="toggle" onClick={navbar_toggler}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </div>
      <div className="links_div">
        <ul>
          {loggedInOrNot}
          {/* <li className="links mobile-name">
            <h2>Hi OLABANJI</h2>
          </li> */}
          <div className="line"></div>

          {/* <li className="links">
            <Link to="/">Products</Link>
          </li> */}
          {/* <li className="links">
            <Link to="/customer">Customers Review</Link>
          </li> */}
          <li className="links">
            <Link to="/">Home</Link>
          </li>
          <li className="links">
            <Link to="/about">About Us</Link>
          </li>
          <li className="links">
            <Link to="/policy">Company Policy</Link>
          </li>
          {/* <li className="links">
            <Link to="/manifest">Manifest</Link>
          </li> */}
          <li className="links">
            <Link to="/contact">Contact Us</Link>
          </li>
          {isLoggedIn && (
            <li className="links">
              <Link to="/manifest">Manifest</Link>
            </li>
          )}
          {/* <li className="links">
            <Link to="/faq">FAQ</Link>
          </li> */}

          <div className="line"></div>

          {isLoggedIn && (
            <li className="links mobile-logout">
              <Link to="/" onClick={signOutHandler}>
                Sign Out
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="social">
        {/* <Link to="/cart">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          {"\u00A0"} Cart {"\u00A0"}
        </Link> */}
        {loggedInOrNotDesktop}
      </div>
    </nav>
  );
}
