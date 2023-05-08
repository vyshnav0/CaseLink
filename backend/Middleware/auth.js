const jwt = require("jsonwebtoken")
const jwtSecret = "Thisisarandomstringforsecuringsite"
const User = require('../models/User')
const Officer = require('../models/Officer')

const Authenticate = async (req, res, next) => {
    try {
        const recToken = req.cookies.authToken
        const data = jwt.verify(recToken,jwtSecret)
        const curUser = data.user
        const userData = await User.findOne({_id:curUser.id})
        const officerData = await Officer.findOne({_id:curUser.id})
        if(officerData != null){
            req.curUser = officerData
        }
        else if(userData != null){
            req.curUser = userData
        }
        else{
            req.curUser = "Undefined"
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