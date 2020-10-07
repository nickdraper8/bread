const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    amount: {
        type: Schema.Types.Decimal128,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    event_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    payer_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },

})

module.exports = Expense = mongoose.model('Expense', ExpenseSchema);