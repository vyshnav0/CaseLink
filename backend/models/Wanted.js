const mongoose = require("mongoose")

const {Schema} = mongoose;

const wantedSchema = new Schema({
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
        type: Buffer,
        required: true,
    }
});

module.exports = mongoose.model('wanted',wantedSchema,'wantedData')