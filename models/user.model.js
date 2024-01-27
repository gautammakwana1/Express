const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    email : {
        type : String,
        unique : true,          //For same data is not allowed
        required : true         //For compulsory requirement in data
    },
    password : {
        type : String
    },
    mobileNo : {
        type : String
    },
    //Soft Delete
    isDelete : {
        type : Boolean,
        default : false
    }
},{
    timestamps : true,
    versionKey : false,
});

module.exports = mongoose.model('users', userSchema);