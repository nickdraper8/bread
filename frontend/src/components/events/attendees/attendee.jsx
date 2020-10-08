import React from 'react';
import ExpenseItemContainer from  "../expenses/expense_item_container";
import "./attendee.css";

class Attendee extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let expenseList = [];
        let totalPayed = 0;
        Object.values(this.props.expenses).forEach(expense => {
            if (this.props.attendee._id === expense.payer_id) {
                expenseList.push(<ExpenseItemContainer key={expense._id} expense={expense} />);
                totalPayed += parseFloat(expense.amount.$numberDecimal);
            }
        });

        totalPayed = Math.round(totalPayed * 100) / 100;

        let expenseListContainer = '';
        if (expenseList.length === 0) {
            expenseListContainer =  <div className="expense-list-container">
                                        <div id="no-expenses-label">No Expenses</div>
                                    </div>
        } else {

            expenseListContainer =  <div className="expense-list-container">
                                        {expenseList}
                                        <div id="expense-item-container" className="total-payed">
                                            <div>
                                                TOTAL
                                            </div>
                                            <div>
                                                ${totalPayed}
                                            </div>
                                        </div>
                                    </div>
        }

        return(
            <div id="attendee-container">
                <div id="attendee-name-title">
                    {this.props.attendee.firstname}
                </div>
                {expenseListContainer}
            </div>
        )
    }
}

export default Attendee;