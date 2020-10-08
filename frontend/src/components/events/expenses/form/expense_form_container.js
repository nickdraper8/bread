import { connect } from "react-redux";
import ExpenseForm from "./expense_form";
import { createExpense } from "../../../../actions/expense_actions";

const mSTP = (state,  ownProps) => {
    return({
        eventId: ownProps.eventId,
        currentUserId: state.session.user.id
    });
};

const mDTP = dispatch => {
    return({
        createExpense: (expense) => dispatch(createExpense(expense))
    });
};

export default connect(mSTP, mDTP)(ExpenseForm);
