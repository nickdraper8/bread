import React from "react";
import "./expense_form.css";

class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            description: '',
            amount: '',
            errors: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.description === '') {
            this.setState({errors: ['You must give a description for your expense']});
        } else if (this.state.amount === '') {
            this.setState({errors: ['You must enter a valid dollar amount for the cost']});
        } else {
            let expense = {
                description: this.state.description,
                amount: this.state.amount,
                event_id: this.props.eventId,
                payer_id: this.props.currentUserId
            };
            this.props.createExpense(expense);
        }
    }

    render() {

        let errors = '';
        if (this.state.errors.length > 0) {
            errors = <div id="expense-form-errors">
                        {this.state.errors[0]}
                    </div>
        }

        return(
            <div id="expense-form-container">
                <div id="expense-form-title">Add New Expense</div>
                <form>
                    <input type="text" placeholder="Expense Description" onChange={this.handleChange("description")}/>
                    <label>Expense Cost</label>
                    <div id="cost-input-container">
                        <div>$</div>
                        <input type="number" step="0.01" min="0" onChange={this.handleChange("amount")}/>
                        <div>dollars</div>
                    </div>
                    <button type="button" onClick={this.handleSubmit}>Add Expense</button>
                </form>
                {errors}
            </div>
        )
    }
}

export default ExpenseForm;