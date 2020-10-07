import React from "react";
import "./user-event-tile.css"
// import { Link } from "react-router-dom";

class UserEventItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }

  render() {
    return (
      <div className="user-event-item-container">
        <div className="user-event-tile">Work Trip</div>
        <div className="user-event-tile">
          Cape Trip
          <div className="user-event-tile-friends"></div>
        </div>
        <div className="user-event-tile">Gov Ball</div>
        <div className="user-event-tile">Work Dinner</div>
        <div className="user-event-tile">Cape Trip</div>
        <div className="user-event-tile">Cape Trip</div>
        <div className="user-event-tile">Cape Trip</div>
        <div className="user-event-tile">Cape Trip</div>
        <div className="user-event-tile">Cape Trip</div>
      </div>
    );
  }
}

export default UserEventItem;
