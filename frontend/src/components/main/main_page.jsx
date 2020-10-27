import React from "react";
import "./main.css";
import { Link } from "react-router-dom";
import beach from "../../images/main-splash-image.jpeg";

class MainPage extends React.Component {
 
  render() {
    return (
      <div>
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
                  <a
                    href="https://www.linkedin.com/in/drew-shroyer-861b32a4/"
                    className="footer-link"
                    id="grey-footer"
                    target="_blank"
                  >
                    Drew Shroyer
                  </a>
                  <a
                    href="https://www.linkedin.com/in/drew-shroyer-861b32a4/"
                    className="footer-link"
                    target="_blank"
                  >
                    About
                  </a>
                  <a
                    href="https://www.linkedin.com/in/drew-shroyer-861b32a4/"
                    className="footer-link"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.linkedin.com/in/drew-shroyer-861b32a4/"
                    className="footer-link"
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
              </div>
              <div className="footer-center-column">
                <div className="footer-links">
                  <a
                    href="https://www.linkedin.com/in/nicholas-draper/"
                    className="footer-link"
                    id="grey-footer"
                    target="_blank"
                  >
                    Nick Draper
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nicholas-draper/"
                    className="footer-link"
                    target="_blank"
                  >
                    About
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nicholas-draper/"
                    className="footer-link"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/nickdraper8"
                    className="footer-link"
                  >
                    Github
                  </a>
                </div>
              </div>
              <div className="footer-right-column">
                <div className="footer-links">
                  <a
                    href="https://www.linkedin.com/in/jrmcc/"
                    className="footer-link"
                    id="grey-footer"
                    target="_blank"
                  >
                    J.R. McCann
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jrmcc/"
                    className="footer-link"
                    target="_blank"
                  >
                    About
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jrmcc/"
                    className="footer-link"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/johnrobertmcc"
                    className="footer-link"
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
              </div>
              <div className="footer-final-column">
                <div className="footer-links">
                  <a
                    href="https://www.linkedin.com/in/ravneet-singh-20b978a4/"
                    className="footer-link"
                    id="grey-footer"
                    target="_blank"
                  >
                    Ravneet Singh
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ravneet-singh-20b978a4/"
                    className="footer-link"
                    target="_blank"
                  >
                    About
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ravneet-singh-20b978a4/"
                    className="footer-link"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/rvsin8"
                    className="footer-link"
                    target="_blank"
                  >
                    Github
                  </a>
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
