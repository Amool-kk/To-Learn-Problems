const mongoose = require('mongoose');


const tagSchema = new mongoose.Schema({
    tagname:String,
    questions:[{type:String}]
})

const tags = mongoose.model('tag',tagSchema);

module.exports = tags;