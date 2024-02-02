const express = require('express');
const app = express();
const ejs = require('ejs');
const hbs = require('hbs');
const port = 5000;

app.set('view engine','ejs');
// app.set('view engine', 'hbs');

app.get("/",(req,res)=>{
    let student = {
        name: 'Kishan Solanki',
        age: 20,
        email: 'kishan12@gmail.com'
    }
    res.render('student.ejs', student);
});

app.listen(port, ()=>{
    console.log('Server is Start at:"http://localhost:5000"');
});
