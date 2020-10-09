import { connect } from "react-redux";
// import { fetchUsersViaEvent } from "../../actions/event_actions";
import {
  deleteEvent,
  editEvent,
  fetchEvent,
} from "../../actions/event_actions";
import { withRouter } from "react-router-dom";
import { fetchExpenses } from "../../actions/expense_actions";
import DinnerPage from "./dinner-home";

const mSTP = (state, ownProps) => {
  return {
    event: state.entities.events[ownProps.match.params.eventId],
    eventId: ownProps.match.params.eventId,
    attendees: state.entities.users.event,
    expenses: state.entities.expenses,
  };
};

const mDTP = (dispatch) => {
  return {
    // fetchUsersViaEvent: (eventId) => dispatch(fetchUsersViaEvent(eventId)),
    editEvent: (event) => dispatch(editEvent(event)),
    deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
    fetchExpenses: (eventId) => dispatch(fetchExpenses(eventId)),
  };
};

export default withRouter(connect(mSTP, mDTP)(DinnerPage));
