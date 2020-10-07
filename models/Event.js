const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  attendees: {
    type: Array,
    required: true,
  },
});

module.exports = Event = mongoose.model("Event", EventSchema);
