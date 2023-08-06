const mongoose = require("mongoose")

const {Schema} = mongoose;

const officerSchema = new Schema({
    pen:{
        type : String,
        required : true
    },
    fname:{
        type : String,
        required : true
    },
    lname:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    },
    age:{
        type : String,
        required : true
    },
    sex:{
        type : String,
        required : true
    },
    rank:{
        type : String,
        required : true
    },
    contactno:{
        type : String,
        required : true
    },
    station:{
        type : String,
        required : true
    },
    opencases:{
        type : [String],
        required : false,
        default : []
    },
    closedcases:{
        type : [String],
        required : false,
        default : []
    }
});

module.exports = mongoose.model('officer',officerSchema,'officerData')