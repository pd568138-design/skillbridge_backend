const Mentor = require("../models/mentorModel");

const createMentor = async (req, res) => {
  try {
    const mentor = await Mentor.create(
      req.body
    );

    res.status(201).json(mentor);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find();

    res.status(200).json(mentors);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const updateMentor = async (req, res) => {
  try {
    const mentor =
      await Mentor.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.status(200).json(mentor);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const deleteMentor = async (req, res) => {
  try {
    await Mentor.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: "Mentor Deleted"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  createMentor,
  getMentors,
  updateMentor,
  deleteMentor
};