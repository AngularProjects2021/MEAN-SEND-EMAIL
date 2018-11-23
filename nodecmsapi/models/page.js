var mongoose = require('mongoose');

//page Schema
var pageSchema = mongoose.Schema({
    title: {
        type:String
    },
    slug: {
        type:String
    },
    content: {
        type:String
    },
    sidebar: {
        type:String
    }
});

var page = module.exports = mongoose.model("page", pageSchema)
