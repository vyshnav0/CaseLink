const express = require('express')
const router = express.Router()
const Complaint = require('../models/Complaint')

router.post("/createcomplaint",
    async (req, res) => {
        try {
            await Complaint.create({
                reportedby: req.body.reportedby,
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

module.exports = router;