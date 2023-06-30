const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://arjun:caselink@web4.twsr1jr.mongodb.net/caselink?retryWrites=true&w=majority"
// const mongoURI = "mongodb://arjun:<password>@ac-vv6p1zl-shard-00-00.twsr1jr.mongodb.net:27017,ac-vv6p1zl-shard-00-01.twsr1jr.mongodb.net:27017,ac-vv6p1zl-shard-00-02.twsr1jr.mongodb.net:27017/?ssl=true&replicaSet=atlas-xsnwl4-shard-0&authSource=admin&retryWrites=true&w=majority"
// if the database faces connection issues swap out the mongoURI

const mongoDB = () => {
  return mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error(err));
}

module.exports = mongoDB;
