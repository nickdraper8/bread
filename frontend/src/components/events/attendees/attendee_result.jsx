import React from 'react';
import "./attendee_result.css";

class AttendeeResult extends React.Component {

    render() {

        let totalPayed = 0;
        Object.values(this.props.expenses).forEach(expense => {
            if (this.props.attendee._id === expense.payer_id) {
                totalPayed += parseFloat(expense.amount.$numberDecimal);
            }
        });

        totalPayed = Math.round(totalPayed * 100) / 100;
        let difference = totalPayed - this.props.avg
        difference = Math.round(difference * 100) / 100;
        if (difference < 0 ) {
            difference = difference * -1;
            return(
                <div id="attendee-result-container">
                    <div id="attendee-result-item">
                        {this.props.attendee.firstname} <span id="owes-money">owes ${difference}</span> to the group
                    </div>
                </div>
            )
        } else {
            return (
                <div id="attendee-result-container">
                    <div id="attendee-result-item">
                        {this.props.attendee.firstname} <span id="is-owed-money">is owed ${difference}</span> from the group
                    </div>
                </div>
            )
        }
    }
}

export default AttendeeResult;