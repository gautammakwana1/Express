const express = require('express');
const orderRoutes = express.Router();
const { verifyToken } = require('../helpers/verifyToken');
const { addNewOrder, getOrder, getAllOrder, deleteOrder } = require('../controller/order.controller');

orderRoutes.post('/add-order', verifyToken , addNewOrder);
orderRoutes.get('/get-order', verifyToken , getOrder);
orderRoutes.get('/all-order', verifyToken , getAllOrder);
orderRoutes.delete('/delete-order', verifyToken , deleteOrder);
module.exports = orderRoutes;