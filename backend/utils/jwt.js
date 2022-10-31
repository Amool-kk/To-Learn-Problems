const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../config')

function generateToken(id) {
    return jwt.sign({ 'sub': id }, SECRET_KEY, { expiresIn: '180000s' })
}

module.exports = { generateToken }
