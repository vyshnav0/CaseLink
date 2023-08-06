const mongoose = require("mongoose")

const {Schema} = mongoose;

const userSchema = new Schema({
    username:{
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
    age:{
        type : String,
        required : true
    },
    sex:{
        type : String,
        required : true
    },
    contactno:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true,
        unique : true
    },
    address:{
        type : String,
        required : true
    },
    fathersName:{
        type : String,
        required : false
    },
    mothersName:{
        type : String,
        required : false
    },
    idType: {
        type: String,
        required: true
    },
    idNo:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    },
    cases:{
        type : [String],
        required : false,
        default : []
    }
});

module.exports = mongoose.model('user',userSchema,'civilianData')