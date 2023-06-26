const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get("/obtainmissing", async (req, res) => {
    try{
        const fname = await User.find({},{fname:1,_id:0})
        const lname = await User.find({},{lname:1,_id:0})
        res.json({success:true,fname:fname,lname:lname})
    }
    catch(err){
        res.json({success:false,error:err})
        console.log("There was an error");
    }
})

module.exports = router;