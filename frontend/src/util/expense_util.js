import axios from "axios";

export const fetchExpenses = (eventId) => {
  return axios.get(`/api/users/${eventId}/expenses`);
};

export const fetchExpense = (expenseId) => {
  return axios.get(`/api/expenses/${expenseId}`);
};

export const createExpense = (expense) => {
  return axios.post(`/api/expenses/new`, expense);
};

export const editExpense = (expense) => {
  return axios.patch(`/api/expenses/edit`, expense);
};

export const deleteExpense = (expenseId) => {
  return axios.patch(`/api/expenses/${expenseId}`);
};
