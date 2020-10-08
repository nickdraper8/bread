import React from "react";
import { Link } from "react-router-dom";
import UserEventIndexContainer from "../events/user-event-index-container"
import InternalNavbarContainer from "../nav/navbar_container";
import "./user-home.css";



class UserHome extends React.Component {

  render() {
    return (
      <div className="user-home-container">
        <div className="left-user-home-container">
          <Link to="/home" className="user-home-internal-title">BREAD</Link>
        </div>
        <div className="right-user-home-container">
          <InternalNavbarContainer />
          <UserEventIndexContainer />
        </div>
      </div>
    );
  }
}

export default UserHome;
