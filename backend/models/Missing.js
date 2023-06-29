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
    },
    img: {
        type: String,
        required: false,
    },
    gender: {
        type: String,
        required : true
    },
    height: {
        type: String,
        required: false
    },
    weight: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: false
    },
    contactno: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('missing',missingSchema,'missingData')