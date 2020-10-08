import { connect } from "react-redux";
import EventIndex from "./user-event-index";
import {
  fetchEvents,
  deleteEvent,
  editEvent,
} from "../../actions/event_actions";

const mSTP = (state) => ({
  events: Object.values(state.entities.events),
  currentUserId: state.session.user.id,
});

const mDTP = (dispatch) => ({
  fetchEvents: (userId) => dispatch(fetchEvents(userId)),
  deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
  editEvent: (event) => dispatch(editEvent(event)),
});

export default connect(mSTP, mDTP)(EventIndex);
