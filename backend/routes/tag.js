const { Router } = require("express");
const { default: mongoose } = require("mongoose");
const routes = Router();
const { Tag } = require("../models");

//get all tags
routes.get("/", async (req, res) => {
  const data = await Tag.find({}).populate("questions");

  if (data) {
    console.log(data);
    res.status(200).json(data);
  } else {
    res.status(500).json({ message: "Try again" });
  }
});

//create a tag
routes.post("/", async (req, res) => {
  const { tag, questions } = req.body;

  const data = new Tag({
    tag,
    questions,
  });

  const result = await data.save();

  if (result) {
    console.log(result);
    res.status(200).json(result);
  } else {
    res.status(500).json({ message: "Some error try again" });
  }
});

//update a tag
routes.patch("/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "No such tag exists" });
  }
  const tag = await Tag.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!tag) {
    return res.status(400).json({ message: "No such tag exists" });
  }

  res.status(200).json(tag);
});

module.exports = routes;

// {

//   "questions":"635e64fceb84b4518e72a886"
// }
