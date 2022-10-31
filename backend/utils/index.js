const mongo = require("./mongo")
const mailer = require("./mailer")
const jwt = require("./jwt")

module.exports = {
    mongo: mongo,
    mailer: mailer,
    jwt: jwt
}
