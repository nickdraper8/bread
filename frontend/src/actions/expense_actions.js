import * as APIExpensesUtil from "../util/expense_util";

export const RECEIVE_EXPENSES = "RECEIVE_EXPENSES";
export const RECEIVE_EXPENSE = "RECEIVE_EXPENSE";
export const REMOVE_EXPENSE = "REMOVE_EXPENSE";

const receiveExpenses = (expenses) => {
  return {
    type: RECEIVE_EXPENSES,
    expenses,
  };
};

const receiveExpense = (expense) => {
  return {
    type: RECEIVE_EXPENSE,
    expense,
  };
};

const removeExpense = (expenseId) => {
  return {
    type: REMOVE_EXPENSE,
    expenseId,
  };
};

export const fetchExpenses = (eventId) => (dispatch) => {
  return APIExpensesUtil.fetchExpenses(eventId).then((expenses) =>
    dispatch(receiveExpenses(expenses))
  );
};

export const fetchExpense = (expenseId) => (dispatch) => {
  return APIExpensesUtil.fetchExpense(expenseId).then((expense) =>
    dispatch(receiveExpense(expense))
  );
};

export const createExpense = (expense) => (dispatch) => {
  return APIExpensesUtil.createExpense(expense).then((expense) =>
    dispatch(receiveExpense(expense))
  );
};

export const editExpense = (expense) => (dispatch) => {
  return APIExpensesUtil.editExpense(expense).then((expense) =>
    dispatch(receiveExpense(expense))
  );
};

export const deleteExpense = (expenseId) => (dispatch) => {
  return APIExpensesUtil.deleteExpense(expenseId).then(
    dispatch(removeExpense(expenseId))
  );
};
