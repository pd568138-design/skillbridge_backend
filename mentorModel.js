const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  mentorName: {
    type: String,
    required: true
  },

  subject: {
    type: String,
    required: true
  },

  experience: {
    type: String,
    required: true
  },

  studentsAssigned: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model(
  "Mentor",
  mentorSchema
);