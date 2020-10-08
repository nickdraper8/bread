import React from "react";
import { Link } from "react-router-dom";

class EventShow extends React.Component {
  componentDidMount() {
    debugger
    this.props.fetchUsersViaEvent(this.props.event._id);
  }

  render() {
    const { event, users } = this.props;
    return (
      <div className="event-show-page-container">
        <div className="event-show-page-title">{event.name}</div>
        <ul className="event-show-attendees">{users}</ul>
        {/* <div className="event-total-cost">{event.cost}</div> */}
        <div className="event-show-link-to-home"><Link to={`/home/`}>Back To Home</Link></div>
      </div>
    );
  }
}

export default EventShow;
