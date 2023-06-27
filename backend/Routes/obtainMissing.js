const express = require('express')
const router = express.Router()
const Missing = require('../models/Missing')

router.post("/addmissing", async (req,res) => {
    try{
        await Missing.create({
            fname : req.body.fname,
            lname : req.body.lname,
            age : req.body.age,
            img : req.body.img
        })
        res.json({success:true})
    }
    catch(err){
        console.error(err);
    }
})

router.get("/obtainmissing", async (req, res) => {
    try{
        const fname = await Missing.find({},{fname:1,_id:0}).sort({_id: -1}).limit(8)
        const lname = await Missing.find({},{lname:1,_id:0}).sort({_id: -1}).limit(8)
        const age = await Missing.find({},{age:1,_id:0}).sort({_id: -1}).limit(8)
        const img = await Missing.find({},{img:1,_id:0}).sort({_id: -1}).limit(8)
        res.json({success:true,fname:fname,lname:lname,age:age,img:img})
    }
    catch(err){
        res.json({success:false})
        console.error(err);
    }
})

module.exports = router;