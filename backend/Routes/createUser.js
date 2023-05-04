const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post("/createuser",async(req,res) => {
    try {
        await User.create({
            username:"arjun",
            fname:"Arjun",
            lname:"Vinod",
            age:22,
            sex:"Male",
            contactno:"7907374687",
            email:"arjunvinod09@gmail.com",
            address:"Vipanchika Kannur",
            fathersName:"Vinod",
            mothersName:"Sheena",
            idNo:"123768374627"
        })
        res.json({success:true});
    } catch (error) {
        console.error(error)
        res.json({success:false});
    }
})

module.exports = router;