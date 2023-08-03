const express = require('express')
const router = express.Router()
const Complaint = require('../models/Complaint')
const Officer = require('../models/Officer')

router.post("/takecase" , async(req,res) => {
    try {
        const pen = req.body.pen;
        const cid = req.body.cid;
        const off = await Officer.findOne({pen : pen})
        const offname = off.fname + " " + off.lname;

        const comp = await Complaint.findOne({cid : cid})
        if(comp.status == 'Open'){
            console.log("Case already open");
            res.json({success:false , case:2})
        }
        else{
            await Officer.updateOne({pen:pen},{$push:{opencases: cid}})
            await Complaint.updateOne({cid:cid},{$set : {status:"Open" , investigatedby: offname}})
            res.json({success:true , case:1})
        }
    }
    catch (error) {
        console.error(error);
        res.json({success:false , case:0})
    }
})

router.post("/dropcase" , async(req,res) => {
    try {
        const pen = req.body.pen;
        const cid = req.body.cid;
        const a = await Officer.updateOne({pen:pen},{$pull : {opencases : cid}});
        await Complaint.updateOne({cid:cid} , {$set : {investigatedby : "Unassigned" , status : "Idle"}});
        res.json({success : true})
    }
    catch (error) {
        console.error(error);
        res.json({success : false})
    }
})

module.exports = router