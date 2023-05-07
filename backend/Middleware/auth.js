const jwt = require("jsonwebtoken")
const jwtSecret = "Thisisarandomstringforsecuringsite"
const User = require('../models/User')
const Officer = require('../models/Officer')

const Authenticate = async (req, res, next) => {
    try {
        authToken = req.cookies.authToken
        const data = jwt.verify(authToken,jwtSecret)
        const curUser = data.user
        if(User.findOne(curUser)){
            req.curUser = curUser
        }
        else if(Officer.findOne(curUser)){
            req.curUser = curUser
        }
        else{
            res.json({success:false})
        }
        next()
        } catch (error) {
            console.error(error)
            res.json({ success: false,exception:"yes" });
        }
    }

module.exports = Authenticate;