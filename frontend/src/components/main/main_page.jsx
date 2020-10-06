import React from "react";
import UserSearchContainer from '../search/user_search_container';

import "./main.css";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <h1>A Twitter Clone</h1>
        <UserSearchContainer />
        <footer>Copyright &copy; 2019 Chirper</footer>
      </div>
    );
  }
}

export default MainPage;
