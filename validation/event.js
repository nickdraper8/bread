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

<<<<<<< HEAD
    if (Validator.isEmpty(data.date)) {
        errors.date = 'Start Date should be before End Date';
    }
=======
   
    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
>>>>>>> 65946431eb9911a0f485882a4426cec0dcaf0517
}