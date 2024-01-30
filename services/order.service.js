const Order = require('../models/order.model');

module.exports = class OrderService {
    // Add order
    async addNewOrder(body) {
        try {
            return await Order.create(body);
        } catch (err) {
            console.log(err);
            return err.message;
        }
    };

    // Get Specific Order
    async getOrder(id) {
        try {
            return await Order.findById(id);
        } catch (error) {
            console.log(error);
            return res.json({ message: "Internal server error From: Order service " });
        }
    };

    // get All Order
    async getAllOrder(body) {
        try {
            let results = await Order.find(body);
            return results;
        } catch (error) {
            console.log(error);
            return res.json({ message: "Internal server error From: Cart service " });
        }
    };

    // Delete Order
    async deleteOrder(id, body) {
        try {
            let results = await Order.findByIdAndUpdate(id, { $set: body }, { new: true });
            return results;
        } catch (error) {
            console.log(error);
            return res.json({ message: "Internal Server Error From Delete Service" });
        }
    };
};