import React from "react";
import "./expense-index.css";
// import ExpenseIndexContainer from "./expense-index-container";

class ExpenseIndex extends React.Component {
  componentDidMount() {
    this.props.fetchExpenses(this.props.currentUserId);
  }

  render() {
    const { expenses, editExpense, deleteExpense } = this.props;
    return (
      <div className="expense-index-container">
          
      </div>
    );
  }
}
export default ExpenseIndex;
