const express = require('express');
const productRoutes = express.Router();
const productController = require('../controller/product.controller');

//Get All Product
productRoutes.get('/', productController.getAllProduct);

// Get data from id  
productRoutes.get('/get-product', productController.getProduct);

// Add Product
productRoutes.post('/add-product', productController.addProduct);

// Update Product
productRoutes.patch('/update-product', productController.updateProduct);

// Delete product
productRoutes.delete('/delete-product', productController.deleteProduct);

module.exports = productRoutes;