const express = require('express');
const cartRoutes = express.Router();
const { verifyToken } = require('../helpers/verifyToken');
const { addNewCart, getAllCart, updateCart, deleteCart } = require('../controller/cart.controller');

cartRoutes.post('/add-cart',verifyToken,addNewCart);
cartRoutes.get('/all-cart',verifyToken,getAllCart);
cartRoutes.put('/update-cart',verifyToken,updateCart);
cartRoutes.delete('/delete-cart',verifyToken,deleteCart);

module.exports = cartRoutes;