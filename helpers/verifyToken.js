const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.verifyToken = async (req,res,next) => {
    try {
        const authorized = req.headers['authorization'];
        if(typeof authorized !== 'undefined'){
            let token = authorized.split(" ")[1];
            // console.log("Token is => ",token);
            const { userId } = jwt.verify(token, 'Gautam');
            // console.log("userId is here => ",userId);
            req.user = await User.findOne({ _id:userId , isDelete : false});
            // console.log("req.user is here => ",req.user);
            req.user ? next() : res.json({message : 'Invalid user'});  // if else statment
        } else {
            res.json({message : "token is Invalid 'From VerifyToken'"});
        }
    } catch (error) {
        console.log(error);
        res.json({message: 'Internal Server Error "From verifyToken"'});
    }
};
