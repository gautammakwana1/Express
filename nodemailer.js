require('dotenv').config();
var nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service:'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.user,
        pass: process.env.pass
    }
});

var mailOptions= {
    from:'Kishan Solanki <hackerby8481@gmail.com>',
    to: 'hackerby8481@gmail.com , bhaiyakaleen18@gmail.com , kananiraj8141@gmail.com',
    subject : 'This is testing email...',
    html : `<h1>Hello I am Kishan Solanki From This side.</h1> 
            <h2>'Kem Cho Badha!' I hope All are Fine.</h2> 
            <h3>This Mail is sent from Gautam Makwana Through Nodemailer....</h3>`,
};

transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Email has been sent",info.response);
    }
});