import { connect } from "react-redux";
import EventShow from "./event-show";
import { fetchEvent } from "../../actions/event_actions";
import { fetchUsersViaEvent } from "../../actions/user_actions";
import { withRouter } from "react-router-dom";


const mSTP = (state, ownProps) => ({
  event: ownProps.event,
  attendees: state.entities.users.event,
  deleteEvent: ownProps.deleteEvent,
  editEvent: ownProps.editEvent,
});

const mDTP = (dispatch) => ({
  fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
  fetchUsersViaEvent: (eventId) => dispatch(fetchUsersViaEvent(eventId)),
});

export default withRouter(connect(mSTP, mDTP)(EventShow));
