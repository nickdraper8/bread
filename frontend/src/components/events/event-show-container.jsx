import { connect } from "react-redux";
import EventShow from "./event-show";
import { fetchEvent } from "../../actions/event_actions";


const mSTP = (state, ownProps) => ({
  event: state.events[ownProps.match.params.eventId],
});

const mDTP = (dispatch) => ({
  fetchPost: (eventId) => dispatch(fetchEvent(eventId)),
});

export default connect(mSTP, mDTP)(EventShow);
