const { PORT } = require("./config")
const routes = require('./routes')

const express = require('express');
const app = express();


// Routes
app.use("/", routes.base)

// Server Run
app.listen(() => {
    console.log(`backend running on ${PORT} port`);
})
