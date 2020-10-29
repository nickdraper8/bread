import React from 'react';
import "./attendee_result.css";
import { sendMessage } from  '../../../util/sms_api_util';
import { milisecondsConverter } from "../../../util/data_format_api";

class AttendeeResult extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonClicked: false
        }

        this.handleSendMessage = this.handleSendMessage.bind(this);
    }

    handleSendMessage(difference) {
        return () => {
            let timeSinceLastMessage = localStorage.getItem(`messageTimerFor${this.props.eventName}${this.props.attendee.username}`);
            if (timeSinceLastMessage || ((Date.now() - timeSinceLastMessage) > 43200000)) {
                let message = '';
                if (difference > 0) {
                    message = `This is a reminder from Bread to let you know that are owed $${difference} from the event named ${this.props.eventName}.`;
                } 
                    message = `This is a reminder from Bread to let you know that owe $${difference * -1} to the event named ${this.props.eventName}.`
                let phoneNumber = this.props.attendee.phone.replace(/-/g, '');
                sendMessage({phoneNumber: phoneNumber, message: message});
                localStorage.setItem(`messageTimerFor${this.props.eventName}${this.props.attendee.username}`, Date.now())
                this.setState({buttonClicked: true});
            }
        }
    }

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

        let messageBtn = ''
        if (this.props.attendee) {
            let timeSinceLastMessage = localStorage.getItem(`messageTimerFor${this.props.eventName}${this.props.attendee.username}`);
            if (!timeSinceLastMessage || ((Date.now() - timeSinceLastMessage) > 43200000)) {
                messageBtn = <button onClick={this.handleSendMessage(difference)}>Send SMS to {this.props.attendee.firstname}</button>
            } else {
                messageBtn = <button id="message-sent-notice">Sent. Send again in {milisecondsConverter(43200000 - (Date.now() - timeSinceLastMessage))}</button>
            }
        }

        if (difference < 0 ) {
            difference = difference * -1;
            return(
                <div id="attendee-result-container">
                    <div id="attendee-result-item">
                        {this.props.attendee.firstname} <span id="owes-money">owes ${difference}</span> to the group
                    </div>
                    {messageBtn}
                </div>
            )
        } else {
            return (
                <div id="attendee-result-container">
                    <div id="attendee-result-item">
                        {this.props.attendee.firstname} <span id="is-owed-money">is owed ${difference}</span> from the group
                    </div>
                    {messageBtn}
                </div>
            )
        }
    }
}

export default AttendeeResult;