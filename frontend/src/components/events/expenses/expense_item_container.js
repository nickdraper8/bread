import { connect } from "react-redux";
import ExpenseItem from "./expense_item";

const mSTP = (state, ownProps) => {
    return({
        expense: ownProps.expense
    });
};

// const mDTP = dispatch => {
//     return({

//     });
// };

export default connect(mSTP)(ExpenseItem);