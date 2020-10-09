import { connect } from "react-redux";
import ExpenseItem from "./expense_item";
import { deleteExpense } from "../../../actions/expense_actions";

const mSTP = (state, ownProps) => {
    return({
        expense: ownProps.expense,
        currentUserId: state.session.user.id
    });
};

const mDTP = dispatch => {
    return({
        deleteExpense: (expenseId) => dispatch(deleteExpense(expenseId))
    });
};

export default connect(mSTP, mDTP)(ExpenseItem);