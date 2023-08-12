const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://arjun:caselink@web4.twsr1jr.mongodb.net/caselink?retryWrites=true&w=majority"
// const mongoURI = "Enter a valid mongoose connection string here"

const mongoDB = () => {
  return mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error(err));
}

module.exports = mongoDB;
