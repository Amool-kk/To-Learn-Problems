const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const tagSchema = new mongoose.Schema({
  tag: { type: String, required: true },
  questions: [{ type: ObjectId, ref: "question" }],
});

const tags = mongoose.model("tag", tagSchema);

module.exports = tags;
