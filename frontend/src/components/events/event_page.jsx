import React from 'react';
import { Link } from 'react-router-dom';
import InternalNavbarContainer from "../nav/navbar_container";
import AttendeeContainer from "./attendees/attendee_container";
import AttendeeResult from "./attendees/attendee_result";
import ExpenseFormContainer from "./expenses/form/expense_form_container";
import "./event_page.css";

class EventPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            editMode : false,
            description: ''
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.changeEdit = this.changeEdit.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchEvent(this.props.eventId);
        this.props.fetchUsersViaEvent(this.props.eventId);
        this.props.fetchExpenses(this.props.eventId);
    }


    handleDescriptionChange(e){
        this.setState({description: e.target.value})
    }

    handleEdit(e) {

        const newEvent = Object.assign({}, this.props.event)
        newEvent.description = this.state.description;

        this.setState(  
            { editMode : false},
            () => this.props.editEvent(newEvent)
        )
    }

    changeEdit() {
        this.setState({
            editMode : !this.state.editMode
        })
    }

    handleDelete() {
        this.props.deleteEvent(this.props.eventId);
        this.props.history.push('/home');
    }

    editViewer() {
        return( 
            <div>
                <input
                type='text'
                onChange={this.handleDescriptionChange}
                value={this.state.description}
                />
                <button onClick={this.changeEdit}>Cancel</button>
                <button onClick={this.handleEdit}>Edit</button>

            </div>
        )
    }

    render() {
        if (!this.props.event) {
            return null;
        } else {
            let attendeesList = Object.values(this.props.attendees).map(attendee => {
                return <AttendeeContainer key={attendee._id} attendee={attendee} />
            });
            let totalExpenses = 0;
            Object.values(this.props.expenses).forEach(expense => {
                totalExpenses += parseFloat(expense.amount.$numberDecimal);
            });
            totalExpenses = Math.round(totalExpenses * 100) / 100;
            let eachOwe = (totalExpenses / Object.values(this.props.attendees).length);
            let attendeesResultList = Object.values(this.props.attendees).map(attendee => {
                return <AttendeeResult key={attendee._id} attendee={attendee} expenses={this.props.expenses} avg={eachOwe} />
            });
            attendeesResultList.unshift(
                <div key={this.props.eventId} id="results-list-title">Summary</div>
            )
            return (
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
                               <div className='description-banner' onDoubleClick={this.changeEdit}>
                                   {this.state.editMode ?  this.editViewer() : this.props.event.description }
                                  

                                   </div> 
                            <div id="event-page-details">
                                <div id="expense-list-container">
                                    <div id="expense-list-title">
                                        <div>Expense List</div>
                                        <div>${totalExpenses}</div>
                                    </div>
                                    <div id="expense-list">{attendeesList}</div>
                                </div>
                                <div id="event-right-side-container">
                                    <div id="event-info-container">
                                        <ExpenseFormContainer eventId={this.props.eventId} />
                                    </div>
                                    <div id="event-info-container">{attendeesResultList}</div>
                                </div>
                            </div>
                            <button type="button" className="delete-event-btn" onClick={this.handleDelete} >DELETE EVENT</button>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
export default EventPage;