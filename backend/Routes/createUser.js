const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post("/createuser",async(req,res) => {
    try {
        await User.create({
            username:req.body.username,
            fname:req.body.fname,
            lname:req.body.lname,
            age:req.body.age,
            sex:req.body.sex,
            contactno:req.body.contactno,
            email:req.body.email,
            address:req.body.address,
            fathersName:req.body.fathersName,
            mothersName:req.body.mothersName,
            idNo:req.body.idNo
        })
        res.json({success:true});
    } catch (error) {
        console.error(error)
        res.json({success:false});
    }
})

module.exports = router;