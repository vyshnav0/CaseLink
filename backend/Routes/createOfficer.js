const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const Officer = require('../models/Officer');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const jwtSecret = "Thisisarandomstringforsecuringsite"

router.post("/createofficer",
    body('password').isLength({ min: 6 }),
    body('contactno').isNumeric()
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10)
        let secPass = await bcrypt.hash(req.body.password, salt)

        try {
            await Officer.create({
                pen: req.body.pen,
                fname: req.body.fname,
                lname: req.body.lname,
                age: req.body.age,
                sex: req.body.sex,
                contactno: req.body.contactno,
                rank: req.body.rank,
                password: secPass,
                station: req.body.station
            })
            res.json({ success: true });
        } catch (error) {
            console.error(error)
            res.json({ success: false });
        }
    })

router.post("/loginofficer",
    body('password').isLength({ min: 6 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({case : 1 , errors: errors.array() });
        }

        try {
            const pen = req.body.pen
            const userData = await Officer.findOne({ pen })
            if (!userData) {
                return res.json({case : 2 , errors: "try loggin in with correct credentials" });
            }

            const pwdCompare = await bcrypt.compare(req.body.password, userData.password)
            if (!pwdCompare) {
                return res.json({case : 3 , errors: "try loggin in with correct credentials" });
            }
            
            const data = {
                user: {
                    id : userData.id
                }
            }

            const authToken = jwt.sign(data,jwtSecret)
            // res.cookie("authToken",authToken,{
            //     path : '/',
            //     sameSite : 'none',
            //     httpOnly : true,
            //     // secure : true,
            //     maxAge : 1000*60*60*12
            // })
            res.json({success:true,authToken:authToken,userData:JSON.stringify(userData)});
        } catch (error) {
            console.error(error)
            res.json({ success: false });
        }
    })

router.post('/refreshofficer' , async(req,res) => {
    const pen = req.body.pen
    const of = await Officer.findOne({pen:pen})
    res.json({success:true,data:JSON.stringify(of)})
})

module.exports = router;