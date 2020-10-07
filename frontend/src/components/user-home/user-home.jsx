import React from "react";
import { Link } from "react-router-dom";
import InternalNavbarContainer from "../nav/navbar_container";
import "./user-home.css";


class UserHome extends React.Component {

  render() {
    return (
        <div className="user-home-container">
          <div className="left-user-home-container">
            <div className="user-home-internal-title">
              <i className="fas fa-bread-slice" id="outer-bread-logo"></i>BREAD
            </div>
          </div>
          <div className="right-user-home-container">
            <InternalNavbarContainer />
            {/* <ul className="user-event-tiles"> */}
            {/* {events.map((event) => ( */}
            {/* <UserEventItem /> */}
            {/* ))} */}
            {/* </ul> */}
          </div>
        </div>
    );
  }
}

export default UserHome;
