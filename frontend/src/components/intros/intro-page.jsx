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
        <div className="right-user-home-container">
          <InternalNavbarContainer />
          {/* <UserEventIndexContainer /> */}
          <div className="intro-page-container">
                
          </div>
        </div>
      </div>
    );
  }
}

export default IntroPage;
