const express = require('express')
const router = express.Router()
// const Authenticate = require('../Middleware/auth')
const jwt = require("jsonwebtoken")
const jwtSecret = "Thisisarandomstringforsecuringsite"
const User = require('../models/User')
const Officer = require('../models/Officer')

router.get("/complaintauth",async(req, res) => {
        try {
            const recToken = req.query.authToken
            const data = jwt.verify(recToken,jwtSecret)
            const curUser = data.user
            const userData = await User.findOne({_id:curUser.id})
            const officerData = await Officer.findOne({_id:curUser.id})
            if(officerData != null){
                req.curUser = officerData
            }
            else if(userData != null){
                req.curUser = userData
            }
            else{
                req.curUser = "Undefined"
                console.log("No such user found. Refresh and try loggin in again");
            }
            res.json({success:true})
        } 
        catch (error) {
            res.json({ success: false,token: `${req.body.authToken}` });
            console.log("UNAUTHORIZED : No Token Provided");
        }
    })

module.exports = router;