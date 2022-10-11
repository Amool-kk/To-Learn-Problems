
const { Router } = require('express')
const routes = Router();
const { Question, Tag } = require('../models')

routes.get('/', async (req, res) => {
    const data = await Question.find({});


    if (data) {
        console.log(data)
        res.status(200).json({ message: data })
    } else {
        res.status(500).json({ message: "try again" })
    }
})

routes.post('/', async (req, res) => {
    const { tagname, questionLink, answerLink } = req.body;

    const data = new Question({
        tagname,
        questionLink,
        answerLink,
        hint,
        level
    })

    const result = await data.save();

    if (result) {
        console.log(result);
        res.status(200).json({ message: result });
    } else {
        res.status(500).json({ message: "Some error try again" })
    }
})

module.exports = routes