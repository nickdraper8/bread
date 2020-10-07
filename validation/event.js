const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateEventInput(data) {
    let errors = {};
    data.name = validText(data.name) ? data.name : '';

    if (Validator.isEmpty(data.name)) {
        errors.name = 'An event name is required';
    }
   

    if (data.attendees.length < 1) {
        errors.attendees = 'At least one attendee is required';
    }

   
    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
}