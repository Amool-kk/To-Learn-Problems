const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const questionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  tags: [{ type: ObjectId, ref: "tag" }],
  questionLink: {
    type: String,
    required: true,
  },
  answerLink: {
    type: String,
    required: true,
  },
  hint: {
    type: String,
    require: true,
  },
  level: {
    type: String,
  },
});

const question = mongoose.model("question", questionSchema);

module.exports = question;
