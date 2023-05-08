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
    criminal: [{
        type: String,
        required: true
    }],
    victim: [{
        type: String,
        required: true
    }],
});

complaintSchema.pre("save", async function (next) {
    if (!this.isNew) {
      return next();
    }
  
    const latestDocument = await mongoose
      .model("complaint", complaintSchema)
      .findOne({}, { crimeno: 1 })
      .sort({ crimeno: -1 });
  
    const latestCrimeno = latestDocument ? parseInt(latestDocument.crimeno.slice(2)) + 1 : 1;
  
    this.crimeno = "CN" + latestCrimeno.toString().padStart(6, "0");
    next();
  });

module.exports = mongoose.model('crime', crimeSchema, 'crimeData');
