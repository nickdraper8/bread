import { connect } from "react-redux";
import UserSearch from "./user_search";
import { updateFilter } from "../../actions/filter_actions";

const mSTP = state => {
    return({
        users: state.users,
        currentUser: state.session.currentUser
    });
};

const mDTP = dispatch => {
    return({
        fetchUsers: (value) => dispatch(updateFilter("bounds", value))
    });
};

export default connect(mSTP, mDTP)(UserSearch);