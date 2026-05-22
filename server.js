const express = require("express");

const app = express();

const connectDB = require("./config/db");

const logger = require("./middleware/logger");

const studentRoutes = require(
  "./routes/studentRoutes"
);

app.use(express.json());

app.use(logger);

connectDB();

app.use(
  "/api/students",
  studentRoutes
);

const mentorRoutes =
require("./routes/mentorRoutes");



app.use(
  "/api/mentors",
  mentorRoutes
);


app.listen(3000, () => {
  console.log(
    "SkillBridge Server Started"
  );
});