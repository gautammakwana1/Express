const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const book = require('./public/book.json')  // this is called relational path

// Built - in middleware
// app.use(express.static("public"));
// app.use('/express',express.static("about.html"));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// Morgan For getting Api's basic info.
// app.use(morgan("dev"));
// app.use(morgan("combined"));
// app.use(morgan("common"));
// app.use(morgan("short"));
// app.use(morgan("tiny"));

// Cors
app.use(cors());

// Rout level Middleware
// let ageLimiter = (req,res,next)=>{
//     if(!req.query.age){
//         return res.json("Sorry! Age not found.")
//     };
//     if(req.query.age >= 18){
//         next();
//     }else{
//         res.end("Sorry! You are not eligible for next page.");
//     }
// };
// body part
// let ageLimiter = (req,res,next)=>{
//     console.log(req.body);
//     console.log('Request Type:', req.originalUrl);
//     console.log('Time:', Date.now());
//     console.log('Request URL:', req.method);
//     if(!req.body.password){
//         return res.json("Sorry! Age not found.")
//     };
//     if(req.body.password == '123'){
//         next();
//     }else{
//         res.end("Sorry! You are not eligible for next page.");
//     }
// }; 
 
// Application Level Middleware
// app.use((req,res,next)=>{
//     if(req.query.age>=18)
//     {
//         next();
//     }else{
//         res.end("Sorry! You are not eligible for next page.");
//     }
// })

app.get('/',(req,res)=>{
    // res.json({ message: "This is GET Method",
    // PassingYear : "2022-2023" });
    res.sendFile(path.join(__dirname,'public','about.html'));
});

app.get('/book',(req,res)=>{
    res.json(book);
})

app.post('/user', (req,res)=>{
    res.json({ message: "This is POST Method",
    College : "VNSGU"})
});
app.put('/',(req,res)=>{
    res.json({ message: "This is PUT Method",
    Course : "Back End Development "})
});
app.patch(''  ,(req,res)=>{
    res.json({ message: "This is PATCH Method",
    Name : "Solanki Kishan "});
});
app.delete('',(req,res)=>{
    res.json({ message: "This is DELETE Method",
    description : "The server run at 1020 port"})
});

app.listen(1020,()=>{
    console.log("Server is start at http://localhost:1020");
})

 