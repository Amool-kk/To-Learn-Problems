const { Router } = require('express')
const question = require('../models/questions')
const tags = require('./tag')
const routes = Router()

routes.get('/',(req,res)=>{
    res.send("api done")
})

module.exports = {
    base: routes,
    tag: tags
}
