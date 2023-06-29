const express = require('express')
const router = express.Router()
const complaintee = require('../models/Complaintee')
const { body, validationResult } = require('express-validator');
const User = require('../models/User')

router.post("/createcomplaintee",
    body('contactno').isNumeric(), async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            
            await complaintee.create({
                name: req.body.reportedby,
                email: req.body.email,
                contactno: req.body.contactno,
                idType: req.body.idType,
                idno: req.body.idno
            })
            res.json({ success: true });
        } catch (error) {
            console.error(error)
            res.json({ success: false });
        }
    })

module.exports = router;