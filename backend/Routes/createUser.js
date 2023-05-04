const express = require('express')
const router = express.Router()
const User = require('../models/User')
const {body,validationResult} = require('express-validator');

router.post("/createuser",
body('email').isEmail(),
body('password').isLength({min : 6}),
body('contactno').isNumeric()
,async(req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

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
            idNo:req.body.idNo,
            password:req.body.password
        })
        res.json({success:true});
    } catch (error) {
        console.error(error)
        res.json({success:false});
    }
})

router.post("/login",
body('email').isEmail(),
body('password').isLength({min : 6}),
async(req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    try {
        const email = req.body.email
        const userData = await User.findOne({email})
        if(!userData){
            return res.status(400).json({errors: "try loggin in with correct credentials"});
        }

        if(req.body.password !== userData.password){
            return res.status(400).json({errors: "try loggin in with correct credentials"});
        }
        else{
            res.send("Succesfully logged in")
        }
    } catch (error) {
        console.error(error)
        res.json({success:false});
    }
})

module.exports = router;