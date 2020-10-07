import React from "react";
import "./user-event-tile.css"
import { Link } from "react-router-dom";
import EventShow from "./event-show"


class UserEventIndex extends React.Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const { events, editEvent, deleteEvent} = this.props;
    return (
      <div className="user-event-item-container">
        <ul className="user-event-tile">
          {events.map((event) => (
            <EventShow
              event={event}
              deleteEvent={deleteEvent}
              editEvent={editEvent}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default UserEventIndex;
