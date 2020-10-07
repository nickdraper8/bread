import { connect } from "react-redux";
import EventForm from "./event_form";
import { createEvent } from "../../actions/event_actions";

const mSTP = state => {
    return({
        currentUserId: state.session.user.id,
        users: state.entities.users.all
    });
};

const mDTP = dispatch => {
    return({
        createEvent: (userId, event) => dispatch(createEvent(userId, event))
    });
};

export default connect(mSTP, mDTP)(EventForm);