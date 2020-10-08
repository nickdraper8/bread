import React from "react";
import "./expense.css";

class ExpenseItem extends React.Component {

    render() {

        return(
            <div id="expense-item-container">
                <div>
                    {this.props.expense.description}
                </div>
                <div>
                    ${parseFloat(this.props.expense.amount.$numberDecimal)}
                </div>
            </div>
        )
    }
}

export default ExpenseItem;

