const { PORT, DB_URI } = require("./config")
const routes = require('./routes')
const { mongo } = require("./utils")

const express = require('express');
const app = express();


// Routes
app.use("/", routes.base)

  // Server Run
  ; (async () => {
    await mongo.connectDB(DB_URI)

    app.listen(PORT, () => {
      console.log(`backend running on ${PORT} port`);
    })

  })()
