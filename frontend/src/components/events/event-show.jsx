import React from "react";
import "./event-show.css";

class EventShow extends React.Component {
  constructor(props){
    super(props);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.state = this.props.fetchEvent(this.props.event._id)
  }

  componentDidMount() {
    this.props.fetchUsersViaEvent(this.props.event._id); 
  }

  handleRedirect() {
    this.props.history.push(`/events/${this.props.event._id}`)
  }

  render() {
    const { event } = this.props;
    let attendees = Object.values(this.props.attendees).map(attendee => {
      return <li>{attendee.firstname}</li>
    });
    debugger
    return (
      <div className="event-show-page-container" onClick={this.handleRedirect}>
        <div className="event-show-page-title">{event.name}</div>
        {/* <div className="event-show-page-attendees"> */}
          {/* <div className="event-show-page-attendees-title">Attendees</div>
          {attendees}
        </div> */}
        <div className="event-details-button">Event Details</div>
      </div>
    );
  }
}

export default EventShow;
