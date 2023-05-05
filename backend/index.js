const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db")

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  next();
})

mongoDB()
.then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})
.catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
app.use('',require('./Routes/createUser'))
app.use('',require('./Routes/createOfficer'))
app.use('',require('./Routes/createComplaint'))