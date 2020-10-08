import React from "react";

import "./main.css";
import { Link } from "react-router-dom";
import bread from "../../images/bread-background.png";

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
          <div className="bread-background-container">
            {/* <img src={bread} className="bread-background-image" /> */}
            {/* <div className="bread-splash-title">BREAD</div> */}
            <div className="bread-splash-subtitle">
              an organizational tool where users can form events with each-other
              and log expenses that are to be split up by others in the event.
            </div>
            <div className="splash-sign-up-button">
              <Link to="/signup">Sign Up</Link>
            </div>
            <div className="use-case-tile-container">
              {/* <div className="use-case-tile-group">Group Trips</div>
          <div className="use-case-tile-work">Work Expenses</div>
          <div className="use-case-tile-dinner">Dinner Party</div> */}
            </div>
            {/* <footer className="footer-container">
          {" "}
          Copyright &copy; 2020 Bread
        </footer> */}
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
