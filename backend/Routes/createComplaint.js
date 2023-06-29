const express = require('express')
const router = express.Router()
const Complaint = require('../models/Complaint')

router.post("/createcomplaint",
    async (req, res) => {
        try {
            await Complaint.create({
                reportedby: req.body.reportedby,
                email: req.body.email,
                contactno: req.body.contactno,
                idType: req.body.idType,
                idno: req.body.idno,
                type: req.body.type,
                location: req.body.location,
                time: req.body.time,
                accused: req.body.accused,
                victim: req.body.victim,
                description: req.body.description,
                nearestStation: req.body.nearestStation
            })
            res.json({ success: true });
        } catch (error) {
            console.error(error)
            res.json({ success: false });
        }
    })

router.get("/obtaincomplaint",async(req,res) => {
    try {
        const complaintdata = await Complaint.find({})
        res.json({success:true , complaintdata:complaintdata})
    }
    catch (error) {
        console.error(error);
    }
})

module.exports = router;