const { PORT, DB_URI } = require("./config");
const routes = require("./routes");

const express = require("express");
const { connectDB } = require("./utils/mongo");
const app = express();

// Routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes.base);
app.use("/tags", routes.tag);
app.use("/questions", routes.question);

//connecting to the database
port = process.env.PORT || 8000;
const start = async () => {
  try {
    await connectDB(process.env.DB_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

module.exports = app;
