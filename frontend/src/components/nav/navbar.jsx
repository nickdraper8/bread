import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/home" className="internal-nav-user-home-button">Home</Link>
        <Link to="/newevent" className="internal-nav-user-create-button">Create Event</Link>
        <button onClick={this.logoutUser} className="user-home-logout-button">
          Log out
        </button>
      </div>
    );
  }
}

export default InternalNavbar;
