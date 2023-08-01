const express = require('express')
const router = express.Router()
const Wanted = require('../models/Wanted')

router.get("/obtainwanted", async (req,res) => {
    try{
        const fname = await Wanted.find({},{fname:1,_id:0}).sort({_id:-1});
        const lname = await Wanted.find({},{lname:1,_id:0}).sort({_id:-1});
        const age = await Wanted.find({},{age:1,_id:0}).sort({_id:-1});
        const img = await Wanted.find({},{image:1,_id:0}).sort({_id:-1});
        const gender = await Wanted.find({},{gender:1,_id:0}).sort({_id:-1});
        const height = await Wanted.find({},{height:1,_id:0}).sort({_id:-1});
        const weight = await Wanted.find({},{weight:1,_id:0}).sort({_id:-1});
        const location = await Wanted.find({},{location:1,_id:0}).sort({_id:-1});
        const date = await Wanted.find({},{date:1,_id:0}).sort({_id:-1});
        const contactno = await Wanted.find({},{contactno:1,_id:0}).sort({_id:-1});

        res.json({success:true,fname:fname,lname:lname,age:age,gender:gender,img:img,height:height,weight:weight,location:location,date:date,contactno:contactno})
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
            gender: req.body.gender,
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

router.delete('/deletewanted' , async(req,res) => {
    try {
        const fname = req.body.fname;
        const lname = req.body.lname;
        const age = req.body.age;
        const gender = req.body.gender;
        const height = req.body.height;
        const weight = req.body.weight;

        const a = await Wanted.deleteOne({fname:fname,lname:lname,age:age,gender:gender,height:height,weight:weight})
        if(a.deletedCount === 1) console.log("Deleted one from backend");
        else if(a.deletedCount === 0) console.log("No data deleted from backend");
        res.json({success:true})
    }
    catch (error) {
        console.error(error);
        res.json({success:false})
    }
})

module.exports = router