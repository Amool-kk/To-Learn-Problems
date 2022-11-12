const { SECRET_KEY } = require("../config")
const jwt = require("jsonwebtoken")

function authenticate(req, res, next) {
    const token = req.cookies.access_token
    console.log(token)
    if (!token) {
        console.log("NO TOKEN")
        return res.status(401).send({
            message: "Unauthorized"
        })
    }
    try {
        const data = jwt.verify(token, SECRET_KEY)
        res.locals.sub = data.sub
        return next()
    } catch {
        console.log("NOT VERIFIED")
        return res.status(401).send({
            message: "Unauthorized"
        })
    }
}


module.exports = { authenticate }