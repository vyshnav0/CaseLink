const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const jwtSecret = "Thisisarandomstringforsecuringsite"

router.post("/createuser",
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    body('contactno').isNumeric()
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10)
        let secPass = await bcrypt.hash(req.body.password, salt)

        try {
            await User.create({
                username: req.body.username,
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
                password: secPass
            })
            res.json({ success: true });
        } catch (error) {
            console.error(error)
            res.json({ success: false });
        }
    })

router.post("/loginuser",
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const email = req.body.email
            const userData = await User.findOne({ email })
            if (!userData) {
                return res.status(400).json({ errors: "try logging in with correct credentials" });
            }

            const pwdCompare = await bcrypt.compare(req.body.password, userData.password)
            if (!pwdCompare) {
                return res.status(400).json({ errors: "try logging in with correct credentials" });
            }
            const data = {
                user: {
                    id: userData.id
                }
            }

            const authToken = jwt.sign(data, jwtSecret)
            // res.cookie("authToken",authToken,{
            //     path : '/',
            //     httpOnly : true,
            //     sameSite : 'none',
            //     // secure : true,
            //     maxAge : 1000*60*60*12
            // })
            res.json({success:true,authToken:authToken,userData:JSON.stringify(userData)});
        } catch (error) {
            console.error(error)
            res.json({ success: false });
        }
    })

module.exports = router;