const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })

const port = process.env.PORT || 8000;
const db_uri = process.env.DB_URI
const mailer = {
    host: process.env.MAILER_HOST,
    port: process.env.MAILER_PORT,
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS,
    name: process.env.MAILER_NAME
}




module.exports = {
    PORT: port,
    DB_URI: db_uri,
    MAILER_HOST: mailer.host,
    MAILER_PORT: mailer.port,
    MAILER_USER: mailer.user,
    MAILER_PASS: mailer.pass,
    MAILER_NAME: mailer.name,
}
