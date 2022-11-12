const { Router } = require("express");
const { authenticate } = require("../middlewares");
const { Admin } = require("../models");
const { jwt } = require("../utils")
const routes = Router();

routes.post("/login", async (req, res) => {
    const { email, password } = req.body
    let user = await Admin.findOne({ email })
    if (!user) {
        return res.status(404).send({ message: 'User Not Found' })
    }

    await user.comparePassword(password, (err, isMatch = false) => {
        if (err || !isMatch) return res.status(401).send({ message: "Unauthorized" })
        const token = jwt.generateToken(user._id)
        res.cookie("access_token", token)
        return res.status(200).send({
            message: "Successful Login",
            token: token
        })

    })
})

routes.post("/logout", authenticate, async (req, res) => {
    res.clearCookie("access_token").send({ message: "Logged out Successfuly" })
})

module.exports = routes