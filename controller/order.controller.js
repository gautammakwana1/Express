const OrderServices = require('../services/order.service');
const orderService = new OrderServices();
const CartServices = require('../services/cart.service');
const cartService = new CartServices();

exports.addNewOrder = async (req, res) => {
    try {
        let carts = await cartService.getAllCart(req.query, req.user);
        let orderitems = carts.map((item) => ({
            cartItem: item.cartItem._id,
            quantity: item.quantity,
            price: item.cartItem.price
        }));
        let totalPrice = orderitems.reduce((total, item) => (total += (item.quantity * item.price)), 0);
        let newOrder = {
            user: req.user._id,
            items: orderitems,
            totalAmount: totalPrice
        };
        let order = await orderService.addNewOrder(newOrder);
        await cartService.updatemany(req.user._id, { isDelete: true });
        res.json({ order, message: "Order Successfully Done" });
    } catch (error) {
        console.log(error);
        res.json({ message: "Internal server Error" });
    }
};
