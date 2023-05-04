const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db")

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