const mongoose = require("mongoose")

const{Schema} = mongoose;

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
        type : Number,
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
        required : true
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
    idNo:{
        type : String,
        required : true
    },
    
});

module.exports = mongoose.model('user',userSchema)