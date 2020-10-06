import React from "react";
import UserSearchContainer from '../search/user_search_container';

import "./main.css";
import { Link } from "react-router-dom";

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page-containter">
        <div className="bread-splash-title">BREAD</div>
        <div className="bread-splash-subtitle">always get your slice</div>
        <div className="splash-sign-up-button">
          <Link to="/signup">Sign Up</Link>
        </div>
        <div className="use-case-tile-container">
          {/* <div className="use-case-tile-group">Group Trips</div>
          <div className="use-case-tile-work">Work Expenses</div>
          <div className="use-case-tile-dinner">Dinner Party</div> */}
        </div>
        {/* <footer className="footer-container">
          {" "}
          Copyright &copy; 2020 Bread
        </footer> */}
      </div>
    );
  }
}

export default MainPage;
