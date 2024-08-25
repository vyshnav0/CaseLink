const mongoose = require('mongoose');

const mongoURI = "/"
// const mongoURI = "Enter a valid mongoose connection string here" mongodb+srv://arjun:caselink@web4.twsr1jr.mongodb.net/caselink?retryWrites=true&w=majority

const mongoDB = () => {
  return mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error(err));
}

module.exports = mongoDB;
