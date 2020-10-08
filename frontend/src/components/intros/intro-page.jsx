import React from "react";
import { Link } from "react-router-dom";
import InternalNavbarContainer from "../nav/navbar_container";
import "./intro-page.css";
import drew from "../../images/drew-pic.png"
import nick from "../../images/nick-pic.png";
import jr from "../../images/jr-pic.png"
import rav from "../../images/rav-pic.png"

class IntroPage extends React.Component {
  render() {
    return (
      <div className="user-home-container">
        <div className="left-user-home-container">
          <Link to="/home" className="user-home-internal-title">
            BREAD
          </Link>
        </div>
        <div className="right-user-home-container-intros">
          <div className="internal-nav-bar-container">
            <Link to="/home" className="internal-nav-user-home-button">
              Home
            </Link>
            <Link to="/newevent" className="internal-nav-user-create-button">
              Create Event
            </Link>
            <Link to="/intros" className="internal-nav-user-intros-button">
              Intros
            </Link>
            <button
              onClick={this.logoutUser}
              className="user-home-logout-button"
            >
              Log out
            </button>
          </div>
          <div className="intro-page-container">
            <div className="drew-information-container">
              <img src={drew} className="intro-head-shot-pic-drew" />
              <a
                className="nav-bar-link"
                id="nav-bar-dash"
                href={"https://www.linkedin.com/in/drew-shroyer-861b32a4/"}
              >
                Drew Shroyer
              </a>
            </div>
            <div className="nick-information-container">
              <img src={nick} className="intro-head-shot-pic" />
              <a
                className="nav-bar-link"
                id="nav-bar-dash"
                href={"https://www.linkedin.com/in/nicholas-draper/"}
              >
                Nick Draper
              </a>
            </div>
            <div className="Rav-information-container">
              <img src={rav} className="intro-head-shot-pic" />{" "}
              <a
                className="nav-bar-link"
                id="nav-bar-dash"
                href={"https://www.linkedin.com/in/ravneet-singh-20b978a4/"}
              >
                Rav Singh
              </a>
            </div>
            <div className="JR-information-container">
              <img src={jr} className="intro-head-shot-pic" />{" "}
              <a
                className="nav-bar-link"
                id="nav-bar-dash"
                href={"https://www.linkedin.com/in/jrmcc/"}
              >
                JR McCann
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroPage;
