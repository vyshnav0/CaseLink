const express = require('express')
const router = express.Router()
const Crime = require('../models/Crime')
const Complaint = require('../models/Complaint')
const Officer = require('../models/Officer')

router.post("/createcrime",
    async (req, res) => {
        try {
            const cidX = req.body.cid
            const penX = req.body.pen
            const off = await Officer.findOne({pen : penX})
            const complaint = await Complaint.findOne({cid: cidX})
            if(!complaint){
                throw new Error(`No such complaint found: ${complaint}`)
            }
            if(!off){
                throw new Error(`Officer mentioned not valid: ${off}`)
            }
            const locationX = complaint.location
            const timeX = complaint.time
            const typeX = complaint.type
            const reportedbyX = complaint.reportedby
            const investigatedbyX = off.fname + " " + off.lname
            const criminal = complaint.accused
            const victim = complaint.victim

            await Crime.create({
                cid: cidX,
                casetaken: new Date(),
                location: locationX,
                time: timeX,
                type: typeX,
                reportedby: reportedbyX,
                investigatedby: investigatedbyX,
                status: "Open",
                criminal: criminal,
                victim: victim
            })

            res.json({ success: true });
        } catch (error) {
            console.error(error)
            res.json({ success: false });
        }
    })


router.get('/getcrime' , async(req,res) => {
    try {
        const cid = req.query.cid
        const crimedata = await Crime.findOne({cid:cid},{_id:0}).sort({casetaken:-1})
        res.json({success:true,crimedata:crimedata})
    }
    catch (error) {
        res.json({success:false})
        console.error(error);
    }
})
module.exports = router;