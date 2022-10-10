require('dotenv').config()

const port = process.env.PORT || 8000;
const db_uri = process.env.DB_URI

module.exports = {
    PORT: port,
    DB_URI: db_uri
}
