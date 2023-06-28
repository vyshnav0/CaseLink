const express = require('express')
const router = express.Router()
const Wanted = require('../models/Wanted')

router.get("/obtainwanted", async (req,res) => {
    try{
        const fname = await Wanted.find({},{fname:1,_id:0}).sort({_id:-1}).limit(8)
        const lname = await Wanted.find({},{lname:1,_id:0}).sort({_id:-1}).limit(8)
        const age = await Wanted.find({},{age:1,_id:0}).sort({_id:-1}).limit(8)
        const img = await Wanted.find({},{image:1,_id:0}).sort({_id:-1}).limit(8)
        res.json({success:true,fname:fname,lname:lname,age:age,img:img})
    }
    catch(err){
        console.error(err);
        res.json({success:false})
    }
})

router.post('/addwanted' , async (req,res) => {
    try{
        await Wanted.create({
            fname : req.body.fname,
            lname : req.body.lname,
            age : req.body.age,
            img : req.body.img,
            height: req.body.height,
            weight: req.body.weight,
            location: req.body.location,
            date: req.body.date,
            contactno: req.body.contactno
        })
        res.json({success:true})
    }
    catch(err){
        console.error(err)
    }
})

module.exports = router