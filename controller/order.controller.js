const OrderServices = require('../services/order.service');
const orderService = new OrderServices();
const CartServices = require('../services/cart.service');
const cartService = new CartServices();

exports.addNewOrder = async (req, res) => {
    try {
        let carts = await cartService.getAllCart(req.query, req.user);
        if (!carts) {
            return res.json("Cart is Not found From this User..");
        };
        // console.log(carts);
        let orderitems = carts.map((item) => ({
            cartItem: item.cartItem._id,
            quantity: item.quantity,
            price: item.cartItem.price
        }));
        // console.log(orderitems);
        let totalPrice = orderitems.reduce((total, item) => (total += (item.quantity * item.price)), 0);
        // console.log(totalPrice);
        let newOrder = {
            user: req.user._id,
            items: orderitems,
            totalAmount: totalPrice
        };
        // console.log(newOrder);
        let order = await orderService.addNewOrder(newOrder);
        await cartService.updatemany(req.user._id, { isDelete: true });
        res.json({ order, message: "Order Successfully Done" });
    } catch (error) {
        console.log(error);
        res.json({ message: "Internal server Error From AddNewOrder Controller" });
    }
};

exports.getOrder = async (req, res) => {
    try {
        let order = await orderService.getOrder(req.body.orderID, { isDelete: false });
        if (!order) {
            return res.json("Order is Not found From this User..");
        };
        res.json(order);
    } catch (error) {
        console.log(error);
        res.json("Internal Server Error From GetAllOrder Controller");
    }
};

exports.getAllOrder = async (req, res) => {
    try {
        let orders = await orderService.getAllOrder({ isDelete: false });
        if (!orders) {
            return res.json({ message: "Order is not found..." });
        }
        return res.json(orders);
    } catch (error) {
        console.log(error);
        res.json({ message: "Internal Server Error From GetAllOrder Controller" });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        let order = await orderService.deleteOrder(req.body.orderID, { isDelete: true });
        if (!order) {
            return res.json({ message: "Order is not found..." });
        };
        return res.json({ order, message: "Order is Deleted Sucessfuly" });
    } catch (error) {
        console.log(error);
        res.json({ message: "Internal Server Error From DeleteOrder Controller" });
    }
};