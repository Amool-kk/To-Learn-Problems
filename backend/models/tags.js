const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
  tag: String,
  questions: [{ type: String }],
});

const tags = mongoose.model("tag", tagSchema);

module.exports = tags;
