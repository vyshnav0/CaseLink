const express = require('express')
const router = express.Router()
const Missing = require('../models/Missing')

router.post("/addmissing", async (req,res) => {
    try{
        await Missing.create({
            fname : req.body.fname,
            lname : req.body.lname,
            age : req.body.age,
            img : req.body.img,
            gender: req.body.gender,
            height: req.body.height,
            weight: req.body.weight,
            location: req.body.location,
            date: req.body.date,
            contactno: req.body.contactno
        })
        res.json({success:true})
    }
    catch(err){
        console.error(err);
    }
})

router.get("/obtainmissing", async (req, res) => {
    try{
        const fname = await Missing.find({},{fname:1,_id:0}).sort({_id: -1});
        const lname = await Missing.find({},{lname:1,_id:0}).sort({_id: -1});
        const age = await Missing.find({},{age:1,_id:0}).sort({_id: -1});
        const img = await Missing.find({},{img:1,_id:0}).sort({_id: -1});
        const gender = await Missing.find({},{gender:1,_id:0}).sort({_id:-1});
        const height = await Missing.find({},{height:1,_id:0}).sort({_id:-1});
        const weight = await Missing.find({},{weight:1,_id:0}).sort({_id:-1});
        const location = await Missing.find({},{location:1,_id:0}).sort({_id:-1});
        const date = await Missing.find({},{date:1,_id:0}).sort({_id:-1});
        const contactno = await Missing.find({},{contactno:1,_id:0}).sort({_id:-1});

        res.json({success:true,fname:fname,lname:lname,age:age,img:img,gender:gender,height:height,weight:weight,location:location,date:date,contactno:contactno})
    }
    catch(err){
        res.json({success:false})
        console.error(err);
    }
})

module.exports = router;