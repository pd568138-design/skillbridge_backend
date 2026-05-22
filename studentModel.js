const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  college: {
    type: String,
    required: true
  },

  year: {
    type: Number,
    required: true
  },

  skills: {
    type: [String],
    default: []
  },

  coins: {
    type: Number,
    default: 0
  },

  level: {
    type: String,
    default: "Beginner"
  }
});

module.exports = mongoose.model(
  "Student",
  studentSchema
);