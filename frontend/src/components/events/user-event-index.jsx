import React from "react";
import "./user-event-tile.css";
import EventShowContainer from "./event-show-container";
class UserEventIndex extends React.Component {
  componentDidMount() {
    this.props.fetchEvents(this.props.currentUserId);
  }
  render() {

    const { events, editEvent, deleteEvent} = this.props;

    let eventList = events.map((event) => (
      <EventShowContainer
        key={event._id}
        event={event}
        deleteEvent={deleteEvent}
        editEvent={editEvent}
      />
    ));

    eventList = eventList.reverse();
    return (
      <div className="user-event-item-container">
        <div className="user-event-tile">{eventList}</div>
      </div>
    );
  }

}
export default UserEventIndex;
