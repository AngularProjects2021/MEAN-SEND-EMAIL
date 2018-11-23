var express = require('express');
var router = express.Router();
path = require('path'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');


// send email
router.post('/send-email',function(req,res){
    //console.log('email is calling')
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'ahitisham.a@gmail.com',
            pass: '05361269081'
        }
    });
    let contact = {
        from: '"Ahitisham Ahamad" <ahitisham.a@gmail.com>', // sender address
        // to: 'ahitisham.a@caritorsolutions.com,ahitisham.national786@gmail.com',
        // subject: 'test sendmail',
        // html: 'Mail of test sendmail ',
        to: req.body.to, // list of receivers
        subject: req.body.subject, // Subject line
        // text: req.body.body, // plain text body
        html: req.body.body // html body
    };

    transporter.sendMail(contact, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
            res.render('index');
        });
  });




//Exports
module.exports = router;