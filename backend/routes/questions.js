const { Router } = require("express");
const { authenticate } = require("../middlewares");
const routes = Router();
const { Question, Tag } = require("../models");

//get all questions
routes.get("/", async (req, res) => {
  const data = await Question.find({}).populate("tags", "tag");

  if (data) {
    console.log(data);
    res.status(200).json(data);
  } else {
    res.status(500).json({ message: "try again" });
  }
});

//add a question
routes.post("/", authenticate, async (req, res) => {
  const { title, tags, questionLink, answerLink, hint, level } = req.body;

  const data = new Question({
    title,
    tags,
    questionLink,
    answerLink,
    hint,
    level,
  });

  const result = await data.save();

  if (result) {
    console.log(result);
    res.status(200).json(result);
  } else {
    res.status(500).json({ message: "Some error try again" });
  }
});

//delete questions
routes.delete("/", async (req, res) => {
  const response = await Question.deleteMany({});
  if (response) {
    res.status(200).json(response);
  } else {
    res
      .status(500)
      .json({ message: "Failed to delete files please try again" });
  }
});

module.exports = routes;
