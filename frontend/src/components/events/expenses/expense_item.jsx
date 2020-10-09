import React from "react";
import "./expense.css";

class ExpenseItem extends React.Component {

    constructor(props) {
        super(props)

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.deleteExpense(this.props.expense._id)
    }

    render() {
        if (this.props.currentUserId === this.props.expense.payer_id) {
            return(
                <div id="expense-item-container">
                    <div>
                        {this.props.expense.description}
                    </div>
                    <div>
                        ${parseFloat(this.props.expense.amount.$numberDecimal)}
                        <button onClick={this.handleDelete} ><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            )
        } else {
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
}

export default ExpenseItem;

