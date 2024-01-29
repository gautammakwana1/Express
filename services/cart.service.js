const Cart = require('../models/cart.model');

module.exports = class CartServices {
    // Add to Cart
    async addToCart(body) {
        try {
            return await Cart.create(body);
        } catch (error) {
            console.log(error);
            return res.json({ message: "Internal server error From: Cart service " });
        }
    };

    // Get cart
    async getCart(body) {
        try {
            return await Cart.findOne(body);
        } catch (error) {
            console.log(error);
            return res.json({ message: "Internal server error From: Cart service " });
        }
    };

    // get All cart
    async getAllCart(body) {
        try {
            let body = {isDelete : false};
            if(query.me === 'true'){
                body.user = user._id
            }
            let results = await Cart.find(body).populate('cartItem').populate({
                path: 'user',
                model: 'users',
                select: 'firstName lastName email'
            });
            return results;
        } catch (error) {
            console.log(error);
            return res.json({ message: "Internal server error From: Cart service " });
        }
    };

    // Update cart
    async updateCart(id,body) {
        try {
            return await Cart.findByIdAndUpdate(id,{ $set:body }, { new: true });
        } catch (error) {
            console.log(error);
            return res.json({ message: "Internal server error From: Cart service " });
        }
    };

    // UpdateMany cart
    async updatemany(user,body){
        try {
            return await Cart.updateMany({user},{$set : body});
        } catch (error) {
            console.log(error);
            return res.json({message : "Ineternal Server Error from cart Service"});
        }
    };
};