require('dotenv').config();
const express = require('express');
const twilio = require('twilio');
const otp = express();

const TWILIO_SID = process.env.TWILIO_SID;

const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;

function sendSMS() {
    const client = new twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);
    return client.messages
        .create({ body: 'Hello This is Testing SMS From Gautam Makwana', from: process.env.TWILIO_PHONE, to: '+917990197960' })
        .then(message => {

            console.log(message, "SMS is SENT");

        })
        .catch(err => {

            console.log(err, "SMS is NOT sent")

        })
};

sendSMS();

otp.listen(5000, () => console.log(`OTP listening at port 5000`));