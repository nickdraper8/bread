import React from "react";

import "./main.css";
import { Link } from "react-router-dom";
import beach from "../../images/main-splash-image.jpeg";

class MainPage extends React.Component {
 
  render() {
    return (
      <div >
        <div className="login-signup-temp-nav-bar">
          <div className="login-signup-bread-title-logo">BREAD</div>
          <div className="login-signup-bread-nav-buttons">
            <Link to="/login">LOG IN</Link>
          </div>
        </div>
        <div className="main-page-containter">
          <div className="bread-splash-subtitle">
            revolutionize the way you split shared expenses with friends. social
            financial awkwardness is now a thing of the past.
          </div>
          <div className="splash-sign-up-button">
            <Link to="/signup">Sign Up</Link>
          </div>
          <img className="beach-pic-background" src={beach} alt="" />
        </div>
            <div className="footer-container">
              <div className="footer-inner-container">
                <div className="footer-more-inner-container">
              <div className="footer-bread-title-logo">created by:</div>
                  <div className="footer-left-column">
                    <div className="footer-links">
                      <Link
                        className="footer-link"
                        id="grey-footer"
                        to="linkedin.com/in/drew-shroyer-861b32a4/"
                      >
                        Drew Shroyer{" "}
                      </Link>
                      <Link
                        className="footer-link"
                        to="linkedin.com/in/drew-shroyer-861b32a4/"
                      >
                        About
                </Link>
                      <Link
                        className="footer-link"
                        to="linkedin.com/in/drew-shroyer-861b32a4/"
                      >
                        LinkedIn
                </Link>
                      <Link
                        className="footer-link"
                        to="linkedin.com/in/drew-shroyer-861b32a4/"
                      >
                       Github
                </Link>
                    </div>
                  </div>
                  <div className="footer-center-column">
                    <div className="footer-links">
                      <Link
                        className="footer-link"
                        id="grey-footer"
                    to="linkedin.com/in/nicholas-draper/"
                      >
                        Nick Draper{" "}
                      </Link>
                      <Link
                        className="footer-link"
                    to="linkedin.com/in/nicholas-draper/"
                      >
                        About
                </Link>
                      <Link
                        className="footer-link"
                    to="linkedin.com/in/nicholas-draper/"
                      >
                        LinkedIn
                </Link>
                      <Link
                        className="footer-link"
                        to="linkedin.com/in/drew-shroyer-861b32a4/"
                      >
                        Github
                </Link>
                
                    </div>
                  </div>
              <div className="footer-final-column">
                <div className="footer-links">
                  <Link
                    className="footer-link"
                    id="grey-footer"
                    to="linkedin.com/in/drew-shroyer-861b32a4/"
                  >
                    Rav Singh{" "}
                  </Link>
                  <Link
                    className="footer-link"
                    to="linkedin.com/in/drew-shroyer-861b32a4/"
                  >
                    About
                </Link>
                  <Link
                    className="footer-link"
                    to="linkedin.com/in/drew-shroyer-861b32a4/"
                  >
                    LinkedIn
                </Link>
                  <Link
                    className="footer-link"
                    to="linkedin.com/in/drew-shroyer-861b32a4/"
                  >
                    Github
                </Link>

                </div>
              </div>
                  <div className="footer-right-column">
                    <div className="footer-links">
                      <Link
                        className="footer-link"
                        id="grey-footer"
                    to="https://www.linkedin.com/in/jrmcc/"
                      >
                        J.R. McCann{" "}
                      </Link>
                      <Link
                        className="footer-link"
                    to="linkedin.com/in/jrmcc/"
                      >
                        About
                </Link>
                      <Link
                        className="footer-link"
                    to="linkedin.com/in/jrmcc/"
                      >
                       LinkedIn
                </Link>
                      <Link
                        className="footer-link"
                        to="linkedin.com/in/drew-shroyer-861b32a4/"
                      >
                        Github
                </Link>
                    </div>
                  </div>
              <div className="footer-final-column">
                <div className="footer-links">
                  <Link
                    className="footer-link"
                    id="grey-footer"
                    to="linkedin.com/in/ravneet-singh-20b978a4/"
                  >
                    Rav Singh{" "}
                  </Link>
                  <Link
                    className="footer-link"
                    to="linkedin.com/in/ravneet-singh-20b978a4/"
                  >
                    About
                </Link>
                  <Link
                    className="footer-link"
                    to="linkedin.com/in/ravneet-singh-20b978a4/"
                  >
                    LinkedIn
                </Link>
                  <Link
                    className="footer-link"
                    to="linkedin.com/in/ravneet-singh-20b978a4/"
                  >
                    Github
                </Link>

                </div>
              </div>
                  <div className="footer-far-right-icons">
                    <Link to="instagram.com/drewshroyer"></Link>
                  </div>
                </div>
          </div>
          </div>
          </div>
    );
  }
}

export default MainPage;
