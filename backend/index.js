const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db")
const cookieParser = require('cookie-parser')
const bodyparser = require('body-parser')

app.use(bodyparser.json({ limit: '10mb' }));
app.use(bodyparser.urlencoded({extended:true,parameterLimit:100000,limit:"500mb"}))
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Credentials", "true");
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
  res.send('Welcome to backend!')
})

app.use(cookieParser())
app.use(express.json())
app.use('',require('./Routes/complaintAuth'))
app.use('',require('./Routes/createUser'))
app.use('',require('./Routes/createOfficer'))
app.use('',require('./Routes/createComplaint'))
app.use('',require('./Routes/createCrime'))
app.use('',require('./Routes/createComplaintee'))
app.use('',require('./Routes/obtainMissing'))
app.use('',require('./Routes/obtainWanted'))
app.use('',require('./Routes/takeCase'))