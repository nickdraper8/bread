const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.handle = validText(data.handle) ? data.handle : '';
    data.email = validText(data.email) ? data.email : '';
    data.password = validText(data.password) ? data.password : '';
    data.password2 = validText(data.password2) ? data.password2 : '';

    // username

    if (!Validator.isLength(data.username, { min: 2, max: 30 })) {
        errors.username = 'Username must be at least two characters long';
    }

    if (Validator.isEmpty(data.username)) {
        errors.username = 'Username is required';
    }

    //first name

    if (!Validator.isLength(data.lastname, {min: 1})){
        errors.firstname = 'First name is required!';
    }

    if (Validator.isEmpty(data.firstname)) {
        errors.firstname = 'Your first name can\'t be empty!';
    }
    
    // last name

    if (!Validator.isLength(data.lastname, { min: 1 })) {
        errors.lastname = 'Last name is required!';
    }
    if (Validator.isEmpty(data.lastname)) {
        errors.lastname = 'Your last name can\'t be empty';
    }

    // email
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email is required!';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'This is not a valid email';
    }

    // password
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password isn\'t long enough!';
    }


    //password2
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Please make sure to confirm your password';
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Those passwords don\'t match :/';
    }

    return {
        errors: Object.keys(errors).length === 0
    };
};