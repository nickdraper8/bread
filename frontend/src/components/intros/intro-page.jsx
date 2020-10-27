import React from "react";
import { Link } from "react-router-dom";
import "./intro-page.css";
import drew from "../../images/drew-pic.png"
import nick from "../../images/nick-pic.png";
import jr from "../../images/jr-pic.png"
import rav from "../../images/rav-pic.png"

class IntroPage extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

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
            <Link to="/calc" className="internal-nav-user-dinner-button">
              Tip Calculator
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
              <img
                src={drew}
                className="intro-head-shot-pic-drew"
                alt="drew-shroyer-pic"
              />
              <div className="intro-text-information">
                <a
                  href={"https://www.linkedin.com/in/drew-shroyer-861b32a4/"}
                  target="_blank"
                >
                  Drew Shroyer
                  <span className="intro-bio">
                    a creative software engineer trained in React/Redux,
                    Javascript, Ruby On Rails. Drew graduated from the Stern
                    School of Business at NYU and has experience in creative
                    direction /marketing for companies like Equinox, Ceros, and
                    Microsoft.
                  </span>
                </a>
              </div>
            </div>
            <div className="nick-information-container">
              <img
                src={nick}
                className="intro-head-shot-pic"
                alt="nick-draper-pic"
              />
              <div className="intro-text-information">
                <a
                  href={"https://www.linkedin.com/in/nicholas-draper/"}
                  target="_blank"
                >
                  Nick Draper
                  <span class="intro-bio">
                    A former technical recruiter, Nick is now a full stack
                    software engineer looking to take his talents into the
                    market. Nick is proficient in many technologies including
                    JavaScript, Ruby, Rails, React, Redux, as well as Node.js
                    and Express. He is excited for the future, and is always
                    excited for a challenge.
                  </span>
                </a>
              </div>
            </div>
            <div className="JR-information-container">
              <img src={jr} className="intro-head-shot-pic" alt="jr-pic" />{" "}
              <div className="intro-text-information">
                <a
                  className="nav-bar-link"
                  target="_blank"
                  id="nav-bar-dash"
                  href={"https://www.linkedin.com/in/jrmcc/"}
                >
                  JR McCann
                  <span className="intro-bio">
                    New York based fullstack software engineer skilled in Ruby,
                    Javascript, Ruby on Rails, SQL, MongoDB/Mongoose, CSS/HTML,
                    Python, and React/Redux.
                  </span>
                </a>
              </div>
            </div>
            <div className="Rav-information-container">
              <img src={rav} className="intro-head-shot-pic" alt="rav-pic" />{" "}
              <div className="intro-text-information">
                <a
                  target="_blank"
                  className="nav-bar-link"
                  id="nav-bar-dash"
                  href={"https://www.linkedin.com/in/ravneet-singh-20b978a4/"}
                >
                  Rav Singh
                  <span className="intro-bio">
                    A former medical research scientist, with a background in
                    neurodegenerative disorders of animals emphasiving motor
                    behavior. Rav is now a creative software engineer trained in
                    React/Redux, Javascript, Ruby On Rails, Express, MongoDB and
                    SQL.
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroPage;
