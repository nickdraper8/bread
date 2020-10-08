import React from "react";
import { Link } from "react-router-dom";
import InternalNavbarContainer from "../nav/navbar_container";
import "./intro-page.css";

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
            <div className="drew-information-container">Drew Shroyer</div>
            <div className="nick-information-container">Nick Draper</div>
            <div className="Rav-information-container">Rav Singh</div>
            <div className="JR-information-container">John Robert McCann</div>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroPage;
