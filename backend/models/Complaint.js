const mongoose = require("mongoose")

const {Schema} = mongoose;

const complaintSchema = new Schema({
    cid:{
        type : String,
        required : false,
        unique : true
    },
    reportedby:{
        type : String,
        required : true
    },
    email: {
        type: String,
        default: "not provided",
        required: false
    },
    contactno: {
        type:String,
        required: true
    },
    idType: {
        type: String,
        required: true
    },
    idno: {
        type: String,
        required: true
    },
    type:{
        type : String,
        required : true
    },
    location:{
        type : String,
        required : true
    },
    time:{
        type : Date,
        required : true
    },
    accused:{
        type : String,
        required : true
    },
    victim:{
        type : String,
        required : true
    },
    description:{
        type : String,
        required : true
    },
    nearestStation:{
        type : String,
        required : false
    },
    status: {
        type: String,
        default: "Idle",
        required: false
    }
});

complaintSchema.pre("save", async function (next) {
    if (!this.isNew) {
      return next();
    }
  
    const latestDocument = await mongoose
      .model("complaint", complaintSchema)
      .findOne({}, { cid: 1 })
      .sort({ cid: -1 });
  
    const latestCid = latestDocument ? parseInt(latestDocument.cid.slice(2)) + 1 : 1;
  
    this.cid = "CN" + latestCid.toString().padStart(6, "0");
    next();
  });
  
  

module.exports = mongoose.model('complaint',complaintSchema,'complaintData')
