import React from "react";
// import { Link } from "react-router-dom";
import "./navbar.css";


class InternalNavbar extends React.Component {
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
      <div className="internal-nav-bar-container">
        <div className="internal-nav-user-home-button">Home</div>
        <div className="internal-nav-user-Search-button">Search</div>
        <div className="internal-nav-user-Events-button">Events</div>
        <button onClick={this.logoutUser} className="user-home-logout-button">
          Log out
        </button>
      </div>
    );
  }
}

export default InternalNavbar;
