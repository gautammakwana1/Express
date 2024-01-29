const Order =require('../models/order.model');

module.exports = class OrderService{
    async addNewOrder(body){
        try {
            return await Order.create(body);
        } catch (err) {
            console.log(err);
            return err.message;
        }
    };
};