const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    tag:[{type:String}],
    questionLink:{
        type:String,
        required: true
    },
    answerLink:{
        type:String,
        required: true
    },
    hint:{
        type:String,
        require:true
    },
    level:{
        type:String
    }
})


const question = mongoose.model('question',questionSchema);

module.exports = question;