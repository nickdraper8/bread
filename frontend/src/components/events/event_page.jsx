import React from 'react';
import { Link } from 'react-router-dom';
import InternalNavbarContainer from "../nav/navbar_container";
import AttendeeContainer from "./attendees/attendee_container";
import ExpenseFormContainer from "./expenses/form/expense_form_container";
import "./event_page.css";


class EventPage extends React.Component {

    componentDidMount() {
        this.props.fetchEvent(this.props.eventId);
        this.props.fetchUsersViaEvent(this.props.eventId);
        this.props.fetchExpenses(this.props.eventId);
    }

    // componentDidUpdate() {
    //     if (Object.values(this.props.attendees).length < 1) {
            
    //     }
    // }

    render() {
        if (!this.props.event) {
            return null;
        } else {

            let attendeesList = Object.values(this.props.attendees).map(attendee => {
                return <AttendeeContainer key={attendee._id} attendee={attendee}/>
            });

            let totalExpenses = 0;
            Object.values(this.props.expenses).forEach(expense => {
                totalExpenses += parseFloat(expense.amount.$numberDecimal);
            });

            totalExpenses = Math.round(totalExpenses * 100) / 100;

            return (
              <div className="user-home-container">
                <div className="left-user-home-container">
                  <Link to="/home" className="user-home-internal-title">
                    BREAD
                  </Link>
                </div>
                <div className="right-user-home-container">
                  <InternalNavbarContainer />
                  <div id="event-page-container">
                    <div className="event-page-title-container">
                      <div id="event-page-title">{this.props.event.name}</div>
                    </div>
                    <div id="event-page-details">
                      <div id="expense-list-container">
                        <div id="expense-list-title">
                          <div>Expense List</div>
                          <div>${totalExpenses}</div>
                        </div>
                        <div id="expense-list">{attendeesList}</div>
                      </div>
                      <div id="event-info-container">
                        <ExpenseFormContainer eventId={this.props.eventId} />
                      </div>
                    </div>
                    {/* <div id="event-page-footer">
                            <div id="event-page-btns">
                                <button type="button">Add Expense</button>
                                <button type="button">Close Event</button>
                            </div>
                            <div id="total-expenses">
                                $ 520.40
                            </div>
                        </div> */}
                  </div>
                </div>
              </div>
            );
        }
    }
}

export default EventPage;