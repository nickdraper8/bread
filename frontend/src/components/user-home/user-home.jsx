import React from "react";

import { Link } from "react-router-dom";
import InternalNavbarContainer from "../nav/navbar_container";
import FriendsIndexItem from "./friends-index-item";
import UserEventItem from "../event/user-event-item";
import UserSearchContainer from "../search/user_search_container"
import "./user-home.css";

class UserHome extends React.Component {
//   constructor(props) {
//     super(props);

//   }
  render() {
    return (
      <div className="user-home-container">
        <div className="left-user-home-container">
          <div className="user-home-internal-title">
            <i className="fas fa-bread-slice"></i>BREAD
          </div>
          <UserSearchContainer />
          <FriendsIndexItem />
        </div>

        <div className="right-user-home-container">
          <InternalNavbarContainer />
          <ul className="user-event-tiles">
            {/* {events.map((event) => ( */}
            <UserEventItem />
            {/* ))} */}
          </ul>
        </div>
      </div>
    );
  }
}

export default UserHome;
