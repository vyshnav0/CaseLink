const express = require('express')
const router = express.Router()
const {body,validationResult} = require('express-validator');
const Officer = require('../models/Officer');

router.post("/createofficer",
body('password').isLength({min : 6}),
body('contactno').isNumeric()
,async(req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    try {
        await Officer.create({
            pen:req.body.pen,
            fname:req.body.fname,
            lname:req.body.lname,
            age:req.body.age,
            sex:req.body.sex,
            contactno:req.body.contactno,
            rank:req.body.rank,
            password:req.body.password,
            station:req.body.station
        })
        res.json({success:true});
    } catch (error) {
        console.error(error)
        res.json({success:false});
    }
})

router.post("/loginofficer",
body('password').isLength({min : 6}),
async(req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    try {
        const pen = req.body.pen
        const userData = await Officer.findOne({pen})
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