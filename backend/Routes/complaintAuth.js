const express = require('express')
const router = express.Router()
const Authenticate = require('../Middleware/auth')

router.get("/complaintauth",Authenticate,(req, res) => {
        console.log("Hello from users custom page");
        res.send(req.curUser)
    })

module.exports = router;