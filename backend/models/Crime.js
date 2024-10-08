const mongoose = require('mongoose');

const { Schema } = mongoose;

const crimeSchema = new Schema({
    crimeno: {
        type: String,
        required: false,
        unique: true
    },
    cid: {
        type: String,
        required: true
    },
    casetaken: {
        type : Date,
        require : true
    },
    location: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    investigatedby: {
        type: String,
        required: true
    },
    reportedby: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    criminal: {
        type : [String],
        required : false
    },
    victim: [{
        type: String,
        required: true
    }],
    updates: {
        type: [String],
        required : false,
        default : ["No updates yet"]
    }
});

crimeSchema.pre("save", async function (next) {
    if (!this.isNew) {
      return next();
    }
  
    const latestDocument = await mongoose
      .model("crime", crimeSchema)
      .findOne({}, { crimeno: 1 , _id:0})
      .sort({ crimeno: -1 });

    const latestCrimeno = latestDocument ? parseInt(latestDocument.crimeno.slice(5)) + 1 : 1;
  
    this.crimeno = "CRMNO" + latestCrimeno.toString().padStart(3, "0");
    next();
  });

module.exports = mongoose.model('crime', crimeSchema, 'crimeData');
