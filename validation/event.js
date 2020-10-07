const Validator = require('validator');
const validText = require('./valid-text');
const validDate = require('./valid-date');

module.exports = function validateStoreInput(data) {
    let errors = {};
    data.name = validText(data.name) ? data.name : '';
    data.date = validDate(data.start_date, data.end_date) ? data.date : '';
    data.attendees = data.attendees.length > 0 ? data.attendees : ''; 

    if (Validator.isEmpty(data.name)) {
        errors.name = 'An event name is required';
    }

    if (Validator.isEmpty(data.attendees)) {
        errors.attendees = 'Atleast one attendee is required';
    }

    if (Validator.isEmpty(data.date)) {
        errors.date = 'Start Date should before End Date';
    }
}