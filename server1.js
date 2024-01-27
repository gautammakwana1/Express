require('dotenv').config();
const express = require("express");
const server = express();
const colors = require("colors");
const path = require("path");
const port = process.env.PORT;
const dbURL = process.env.MONGO_URL;

const { default: mongoose } = require("mongoose");
const productRoutes = require('./routes/product.routes');
const userRoutes = require('./routes/user.routes');
const cartRoutes = require("./routes/cart.routes");

server.use(express.json());

// Access all routes through productRoutes
server.use('/api/product', productRoutes);
server.use('/api/user', userRoutes);
server.use('/api/cart', cartRoutes);

server.get('*', (req, res) => {
    res.end("<h1>Page Not Found....</h1>")
});

server.listen(port, () => {
    mongoose.connect(dbURL)
        .then(console.log('Database is connected'))
        .catch(err => console.log(err));
    console.log("Server is start at http://localhost:1020".rainbow);
});
