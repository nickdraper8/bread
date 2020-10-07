import React from "react";
// import { Link } from "react-router-dom";
import UserEventIndex from "../events/user-event-index"
import InternalNavbarContainer from "../nav/navbar_container";
import "./user-home.css";



class UserHome extends React.Component {

  render() {
    return (
      <div className="user-home-container">
        <div className="left-user-home-container">
          <div className="user-home-internal-title">BREAD</div>
        </div>
        <div className="right-user-home-container">
          <InternalNavbarContainer />
          {/* <UserEventIndex /> */}
        </div>
      </div>
    );
  }
}

export default UserHome;
