const mongoose = require('mongoose')

function connectDB(db_uri) {
    return (mongoose.connect(
        db_uri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
        .then(() => console.log(`Connection establised to ${db_uri}`))
        .catch((err) => {
            console.log(err)
            process.exit(0)
        }))
}

module.exports = { connectDB }
