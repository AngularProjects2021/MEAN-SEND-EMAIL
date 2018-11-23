var mongoose = require('mongoose');

//page Schema
var userSchema = mongoose.Schema({
    username: {
        type:String
    },
    password: {
        type:String
    }
   
});

var User = module.exports = mongoose.model("User", userSchema)
