const { Router } = require('express')
const routes = Router()

routes.get('/', (req, res) => {
    res.send("API Working");
})

module.exports = {
    base: routes
}
