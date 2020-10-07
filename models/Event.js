const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  attendees: {
    type: Array,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  start_date: Date,
  end_date: Date,
});

module.exports = Event = mongoose.model("Event", EventSchema);
