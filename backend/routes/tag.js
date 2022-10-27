const { Router } = require("express");
const routes = Router();
const { Tag } = require("../models");

routes.get("/", async (req, res) => {
  const data = await Tag.find({});

  if (data) {
    console.log(data);
    res.status(200).json({ message: data });
  } else {
    res.status(500).json({ message: "try again" });
  }
});

routes.post("/", async (req, res) => {
  const { tag, questions } = req.body;

  const data = new Tag({
    tag,
    questions,
  });

  const result = await data.save();

  if (result) {
    console.log(result);
    res.status(200).json({ message: result });
  } else {
    res.status(500).json({ message: "Some error try again" });
  }
});

module.exports = routes;
