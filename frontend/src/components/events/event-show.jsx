import React from "react";
import { Link } from "react-router-dom";

class EventShow extends React.Component {
  constructor(props){
    super(props);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleRedirect() {
    this.props.history.push(`/events/${this.props.event.id}`)
  }

  componentDidMount() {
    this.props.fetchUsersViaEvent(this.props.event._id);
  }

  render() {
    const { event, users } = this.props;
    return (
      <div className="event-show-page-container" onClick={this.handleRedirect}>
        <div className="event-show-page-title">{event.name}</div>
        <ul className="event-show-attendees">{users}</ul>
        <div className="event-show-link-to-home"><Link to={`/home/`}>Back To Home</Link></div>
      </div>
    );
  }
}

export default EventShow;
