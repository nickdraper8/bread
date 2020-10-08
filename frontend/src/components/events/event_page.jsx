import React from 'react';
import { Link } from 'react-router-dom';
import InternalNavbarContainer from "../nav/navbar_container";
import "./event_page.css";

class EventPage extends React.Component {

    componentDidMount() {
        this.props.fetchEvent(this.props.eventId);
    }

    componentDidUpdate() {
        if (Object.values(this.props.users).length < 1) {
            this.props.fetchUsersViaEvent(this.props.event._id);
        }
    }

    render() {
        return(
            <div className="user-home-container">
                <div className="left-user-home-container">
                <Link to="/home" className="user-home-internal-title">BREAD</Link>
                </div>
                <div className="right-user-home-container">
                <InternalNavbarContainer />
                <div id="event-page-container">
                    This is the event page
                    {/* {this.props.event.name} */}
                </div>
                </div>
            </div>
            );
    }
}

export default EventPage;