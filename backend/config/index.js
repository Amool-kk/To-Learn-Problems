const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })

const port = process.env.PORT || 8000;
const db_uri = process.env.DB_URI

module.exports = {
    PORT: port,
    DB_URI: db_uri
}
