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
                fname: req.body.fname,
                lname: req.body.lname,
                age: req.body.age,
                sex: req.body.sex,
                contactno: req.body.contactno,
                email: req.body.email,
                address: req.body.address,
                fathersName: req.body.fathersName,
                mothersName: req.body.mothersName,
                idType: req.body.idType,
                idNo: req.body.idNo,
            })
            res.json({ success: true });
        } catch (error) {
            console.error(error)
            res.json({ success: false });
        }
    })

module.exports = router;