import React from "react";
import "./event-show.css";

class EventShow extends React.Component {
  constructor(props){
    super(props);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleRedirect() {
    this.props.history.push(`/events/${this.props.event._id}`)
  }

  render() {
    const { event } = this.props;
    return (
      <div className="event-show-page-container" onClick={this.handleRedirect}>
        <div className="event-show-page-title">{event.name}</div>
        <div className="event-details-button">Event Details</div>
      </div>
    )
  }
}

export default EventShow;
