const mongoose = require("mongoose")

const {Schema} = mongoose;

const complainteeSchema = new Schema({
    name:{
        type : String,
        required : true
    },
    contactno:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : false
    },
    idType: {
        type: String,
        required: true
    },
    idno:{
        type : String,
        required : true
    }
});

module.exports = mongoose.model('complaintee',complainteeSchema,'complainteeData')