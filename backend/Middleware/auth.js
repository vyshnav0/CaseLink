const jwt = require("jsonwebtoken")
const jwtSecret = "Thisisarandomstringforsecuringsite"
const User = require('../models/User')
const Officer = require('../models/Officer')

const Authenticate = async (req, res, next) => {
    try {
        const recToken = req.cookies.authToken
        const data = jwt.verify(recToken,jwtSecret)
        const curUser = data.user
        if(User.findOne(curUser)){
            req.curUser = curUser
        }
        else if(Officer.findOne(curUser)){
            req.curUser = curUser
        }
        else{
            req.curUser = "Undefined"
            res.json({success:false})
            console.log("No such user found. Refresh and try loggin in again");
        }
        next()
    } 
    catch (error) {
        console.error(error)
        res.json({ success: false,token: `${req.cookies.authToken}` });
        console.log("UNAUTHORIZED : No Token Provided");
    }
    }

module.exports = Authenticate;