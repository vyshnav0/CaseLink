const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://arjun:caselink@web4.twsr1jr.mongodb.net/caselink?retryWrites=true&w=majority"

const mongoDB = () => {
  return mongoose.connect(mongoURI)
    .then(async() => 
        {
            console.log('Connected to MongoDB Atlas')
            const fetched_data = await mongoose.connection.db.collection("adminData")
            fetched_data.find({}).toArray(function(err,data){
                if(err) console.log(err);
                else console.log(data);
            })
        })
    .catch(err => console.error(err));
}

module.exports = mongoDB;
