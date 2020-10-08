import { connect } from "react-redux";
import ExpenseIndex from "./expense-index";
import {
  fetchExpenses,
  deleteExpense,
  editExpense,
} from "../../actions/expense_actions";

const mSTP = (state) => ({
  expenses: Object.values(state.entities.expenses),
  currentUserId: state.session.user.id,
});

const mDTP = (dispatch) => ({
  fetchExpenses: (eventId) => dispatch(fetchExpenses(eventId)),
  deleteExpense: (expenseId) => dispatch(deleteExpense(expenseId)),
  editExpense: (expense) => dispatch(editExpense(expense)),
});

export default connect(mSTP, mDTP)(ExpenseIndex);
