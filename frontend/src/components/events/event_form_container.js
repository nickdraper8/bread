import { connect } from "react-redux";
import EventForm from "./event_form";
import { createEvent } from "../../actions/event_actions";
import { withRouter } from "react-router-dom";

const mSTP = state => {
    return({
        currentUserId: state.session.user.id,
        users: state.entities.users.search
    });
};

const mDTP = dispatch => {
    return({
        createEvent: (event) => dispatch(createEvent(event))
    });
};

export default withRouter(connect(mSTP, mDTP)(EventForm));