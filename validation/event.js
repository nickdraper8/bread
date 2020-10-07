const Validator = require('validator');
const validText = require('./valid-text');
const validDate = require('./valid-date');

module.exports = function validateEventInput(data) {
    let errors = {};
    data.name = validText(data.name) ? data.name : '';
    data.date = validDate(data.start_date, data.end_date) ? data.date : '';
    data.attendees = data.attendees.length > 0 ? data.attendees : ''; 

    if (Validator.isEmpty(data.name)) {
        errors.name = 'An event name is required';
    }

    if (Validator.isEmpty(data.attendees)) {
        errors.attendees = 'At least one attendee is required';
    }

    if (Validator.isEmpty(data.date)) {
        errors.date = 'Start date has to be before the end date!';
    }
}