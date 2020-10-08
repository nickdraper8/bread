import { connect } from 'react-redux';
import Attendee from "./attendee";

const mSTP = (state, ownProps) => {
    return({
        attendee: ownProps.attendee,
        expenses: state.entities.expenses
    });
};

// const mDTP = dispatch => {
//     return({

//     });
// };

export default connect(mSTP)(Attendee);