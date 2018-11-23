var express = require('express');
var router = express.Router();

//Get Sidebar Model
var Sidebar = require('../models/sidebar')

// get sidebar
router.get('/edit-sidebar',function(req,res){
    var id = "5beab9adc4c4e210a17ae8c8";
  Sidebar.findById(id,function(err,sidebar){
     if (err) console.log(err);
     res.json(sidebar);
   });
});



// post sidebar
router.post('/edit-sidebar',function(req,res){

    var id = "5beab9adc4c4e210a17ae8c8";
    Sidebar.findById(id, function (err, sidebar) {
        if (err) console.log(err);
        sidebar.content = req.body.content; 

        sidebar.save(function (err) {
            if (err) {
                console.log(err);
                res.json("problem");
            } else {
                res.json("ok");
            }
        })


    })
    

 
});





//Exports
module.exports = router;