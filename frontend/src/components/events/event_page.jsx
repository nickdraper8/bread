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
        if (!this.props.event) {
            return null;
        } else {
            return(
                <div className="user-home-container">
                    <div className="left-user-home-container">
                    <Link to="/home" className="user-home-internal-title">BREAD</Link>
                    </div>
                    <div className="right-user-home-container">
                    <InternalNavbarContainer />
                    <div id="event-page-container">
                        <div id="event-page-title">
                            {this.props.event.name}
                        </div>
                        <div id="event-page-details">
                            <div id="expense-list-container">
                                expense list container
                            </div>
                            <div id="event-info-container">
                                event info container
                            </div>
                        </div>
                        <div id="event-page-footer">
                            <div id="event-page-btns">
                                <button type="button">Add Expense</button>
                                <button type="button">Close Event</button>
                            </div>
                            <div id="total-expenses">
                                $ 520.40
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            );
        }
    }
}

export default EventPage;