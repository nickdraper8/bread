import React from 'react';
import UserSearchContainer from '../search/user_search_container';
import InternalNavbarContainer from "../nav/navbar_container";
import { Link } from 'react-router-dom';
import "./event_form.css";

class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      attendees: {},
      errors: [],
      desciption: ''
    };

    this.handleAddAttendee = this.handleAddAttendee.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRemoveAttendee = this.handleRemoveAttendee.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
  }

  handleAddAttendee(e) {
    let newState = Object.assign({}, this.state.attendees);
    newState[e._dispatchInstances.key] = this.props.users[e._dispatchInstances.key];
    this.setState({
      attendees: newState,
      errors: [],
    });
  }

  handleRemoveAttendee(e) {
    let newState = Object.assign({}, this.state.attendees);
    delete newState[e._dispatchInstances.key];
    this.setState({
      attendees: newState
    });
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value, errors: [] });
  }

  handleDescription(e) {
    this.setState({description: e.target.value})
  }

  handleSubmit(e) {
      e.preventDefault();
      let attendeeIds = Object.keys(this.state.attendees);
      if (attendeeIds.length < 1) {
        this.setState({errors: ['You must include at least one user! Use the search bar to find users']});
      } else if (this.state.name === '') {
        this.setState({errors: ['You must give your event a name!']});
      } else {
        let attendeesWithCreator = attendeeIds.concat(this.props.currentUserId);
        let event = {
            name: this.state.name,
            attendees: attendeesWithCreator,
            description: this.state.description
        };
        this.props.createEvent(event);
        this.props.history.push('/home');
    }
  }

  render() {
    let attendeesList = '';
    if (Object.values(this.state.attendees).length > 0) {
      attendeesList = Object.values(this.state.attendees).map((user) => {
        return <div
                  key={user._id}
                  onClick={this.handleRemoveAttendee}
                  className="user-search-result-item"
                >
                  {user.username}
                  <i className="fas fa-user-times"></i>
                </div>
      })
    } else {
        attendeesList = 
            <div
            className="user-search-result-item"
            >
            No Users Added Yet!
            </div>;
    }

    let errorsList = '';
    let errorsUl = '';
    if (this.state.errors.length > 0) {
        errorsList = this.state.errors.map(error => {
            return <p className="event-form-error-li">!! {error} !!</p>
        })
        errorsUl = <div className="event-form-error-ul">{errorsList}</div>
    }

    return (
      <div className="user-home-container">
        <div className="left-user-home-container">
          <Link to="/home" className="user-home-internal-title">BREAD</Link>
        </div>
        <div className="right-user-home-container">
          <InternalNavbarContainer />
          <div id="event-form-container">
            <h1>Create Event</h1>
            <div id="form-items-container">
              <UserSearchContainer
                handleAddAttendee={this.handleAddAttendee}
                attendees={this.state.attendees}
              />
              <div className="event-form-details-container">
             
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    placeholder="Event Name"
                  />
                  <button type="submit">Create Event</button>
                </form>
                <input
                  className='description' 
                  onChange={this.handleDescription}
                  type='text'
                  value={this.state.description}
                  placeholder='  add a description... (optional)'
                />
                <div className="user-search-results-container">
                  {attendeesList}
                </div>
                {errorsUl}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventForm;