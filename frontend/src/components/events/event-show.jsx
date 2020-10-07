import React from "react";
import { Link } from "react-router-dom";

class EventShow extends React.Component {
  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId);
  }

  render() {
    const { event } = this.props;
    return (
      <div className="event-show-page-container">
        <div className="event-show-page-title">{event.title}</div>
        <ul className="event-show-attendees">{event.attendees}</ul>
        <div className="event-total-cost">{event.cost}</div>
        <div className="event-show-link-to-home"><Link to={`/home/`}>Back To Home</Link></div>
      </div>
    );
  }
}

export default EventShow;
