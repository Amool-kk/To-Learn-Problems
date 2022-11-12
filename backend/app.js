const { PORT, DB_URI } = require("./config");
const routes = require("./routes");
const { connectDB } = require("./utils/mongo");

const express = require("express");
var cookieParser = require('cookie-parser');

const app = express();

// Routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(routes.base);
app.use("/tags", routes.tag);
app.use("/questions", routes.question);
app.use("/auth", routes.auth)

//connecting to the database
const start = async () => {
  try {
    await connectDB(DB_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

module.exports = app;