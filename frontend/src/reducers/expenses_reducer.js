import {
  RECEIVE_EXPENSES,
  RECEIVE_EXPENSE,
  REMOVE_EXPENSE,
} from "../actions/expense_actions";
import { formatToJson } from "../util/data_format_api";

const expensesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_EXPENSES:
      return formatToJson(action.expenses.data);
    case RECEIVE_EXPENSE:
      newState[action.expense.data._id] = action.expense.data;
      return newState;
    case REMOVE_EXPENSE:
      delete newState[action.expenseId];
      return newState;
    default:
      return state;
  }
};

export default expensesReducer;
