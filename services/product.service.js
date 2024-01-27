const Product = require('../models/product.model');

module.exports = class ProductServices {
    // Add New Product
    async addNewProduct(body) {
        try {
            let result = await Product.create(body);
            return result;
        } catch (error) {
            return error.message;
        }
    };

    // get All Products
    async getAllProducts(body) {
        try {
            let result = await Product.find(body);
            return result;
        } catch (error) {
            return error.message;
        }
    };

    // get Product
    async getProduct(body) {
        try {
            let result = await Product.findOne(body);
            return result;
        } catch (error) {
            return error.message;
        }
    };

    // get Product by ID
    async getProductById(id) {
        try {
            let result = await Product.findById(id);
            return result;
        } catch (error) {
            return error.message;
        }
    };

    // update Product by ID
    async updateProduct(id, body) {
        try {
            let result = await Product.findByIdAndUpdate(id, { $set: body }, { new: true });
            return result;
        } catch (error) {
            return error.message;
        }
    };
}