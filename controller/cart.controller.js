const CartServices = require('../services/cart.service');
const CartService = new CartServices();

exports.addNewCart = async (req, res) => {
    try {
        let cart = await CartService.getCart({ cartItem: req.body.cartItem, user: req.user._id, isDelete: false });
        if (cart) {
            return res.json({ message: 'Cart Item already exist...' });
        }
        cart = await CartService.addToCart({
            ...req.body, user: req.user._id
        })
        res.json({ cart, message: 'Cart Added Sucess' });
    } catch (error) {
        console.log(error);
        return res.json({message : "Internal server error From:controller"});
    }
};

exports.getAllCart = async (req, res) => {
    try {
        let carts = await CartService.getAllCart({ user: req.user._id, isDelete: false });
        res.json(carts);
    } catch (error) {
        console.log(error);
        return res.json({message : "Internal server error From:controller"});
    }
};

exports.updateCart = async (req, res) => {
    try {
        let cart = await CartService.getCart({user: req.user._id});
        console.log(cart);
        if(!cart){
            return res.json({message: 'Items is Not Found'});
        }
        let id = cart._id;
        // console.log("item Id => ",id);
        let userId = cart.user;
        // console.log(userId);
        let cartId = cart.cartItem;
        // console.log("cartID =>",cartId);
        cart = await CartService.updateCart(cart._id,req.body);
        res.json({cart ,message: "Cart Updated sucessfully"});
    } catch (error) {
        console.log(error);
        return res.json({message : "Internal server error From:controller"});
    }
};

exports.deleteCart = async (req, res) => {
    try {
        let cart = await CartService.getCart({user: req.user._id});
        console.log(cart);
        if(!cart){
            return res.json({message: 'Items is Not Found'});
        }
        cart = await CartService.updateCart(req.body.cartId,{isDelete:true});
        res.json({cart ,message: "Cart deleted sucessfully"});
    } catch (error) {
        console.log(error);
        return res.json({message : "Internal server error From:controller"});
    }
};
