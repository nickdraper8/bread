import React from "react";

import "./main.css";
import { Link } from "react-router-dom";
import beach from "../../images/main-splash-image.jpeg";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <div className="login-signup-temp-nav-bar">
          <div className="login-signup-bread-title">BREAD</div>
          <div className="login-signup-bread-nav-buttons">
            <Link to="/login">LOG IN</Link>
          </div>
        </div>
        <div className="main-page-containter">
            <div className="bread-splash-subtitle">
              an organizational tool where users can form events with each-other
              and log expenses that are to be split up by others in the event.
            </div>
            <div className="splash-sign-up-button">
              <Link to="/signup">Sign Up</Link>
            </div>
            <img className="beach-pic-background" src={beach} alt=""/>
          </div>
        </div>
    );
  }
}

export default MainPage;
