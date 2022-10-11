const { Router } = require('express')
const tags = require('./tag')
const questions = require('./questions')
const routes = Router()

routes.get('/', (req, res) => {
    res.send("api done")
})

module.exports = {
    base: routes,
    tag: tags,
    question: questions
}
