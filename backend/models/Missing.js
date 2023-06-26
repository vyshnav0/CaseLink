const mongoose = require("mongoose")

const {Schema} = mongoose;

const missingSchema = new Schema({
    fname:{
        type : String,
        required : true
    },
    lname:{
        type : String,
        required : true
    },
    age:{
        type : String,
        required : true
    }
});

module.exports = mongoose.model('missing',missingSchema,'missingData')