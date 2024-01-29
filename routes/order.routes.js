const express = require('express');
const orderRoutes = express.Router();
const { verifyToken } = require('../helpers/verifyToken');
const { addNewOrder } = require('../controller/order.controller');

orderRoutes.post('/add-order', verifyToken , addNewOrder);
module.exports = orderRoutes;