const express = require("express");
const colors = require("colors");
const server = express();

// server.use('/user/:id', (req, res, next) => {
//     console.log('Request Type:', req.originalUrl)
//     next()
// });

// function logOriginalUrl(req, res, next) {
//     console.log('Request URL:', req.method)
//     next()
// }

// function logMethod(req, res, next) {
//     console.log('Time:', Date.now())
//     next()
// }

// const logStuff = [logOriginalUrl, logMethod]
// server.get('/user/:id', logStuff, (req, res, next) => {
//     res.send('User Info')
// })

server.get('/', (req, res) => {
    res.end("<h1>This is First Page</h1>")
})
server.get('/demo', (req, res) => {
    res.end("<h1>This is Demo Page</h1>")
})
server.get('/user', (req, res) => {
    res.end("<h1>This is User Page</h1>")
})
server.get('*', (req, res) => {
    res.end("<h1>This is Page</h1>")
})

server.listen(1020, () => {
    console.log("Server is start at http://localhost:1020".rainbow);
})