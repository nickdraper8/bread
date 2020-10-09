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
          <Link to="/home" className="user-home-internal-title">
            BREAD
          </Link>
          <div className="home-page-app-instructions">
            Welcome to Bread - Revolutionize the way you split shared expenses with friends. Social
            financial awkwardness is now a thing of the past. Evenly distribute exepenses for group trips, dinner, work events and more. 
            Start by creating an event under "Create Event" and then add expenses within the tiles on the home page. 
          </div>
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
