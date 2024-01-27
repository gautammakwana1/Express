const ProductServices = require('../services/product.service');
const productService = new ProductServices();


exports.getAllProduct = async (req, res) => {
    let products = await productService.getAllProducts({ isDelete: false });
    res.json({ Product: products });
};

exports.getProduct = async (req, res) => {
    let id = req.query.productID;
    let getProduct = await productService.getProductById(id);
    if (!getProduct) {
        res.json({ message: "Product is Not Found..." });
    }
    let showProduct = {
        id: getProduct._id,
        title: getProduct.title,
        price: getProduct.price
    };
    // console.log(showProduct);
    // res.json({ product: getProduct });
    res.json({ product: showProduct });
};

exports.addProduct = async (req, res) => {
    let product = await productService.getProduct({ title: req.body.title, isDelete: false });
    if (product) {
        return res.json({ message: 'Product is alredy exist.' });
    }
    let newProduct = await productService.addNewProduct({ ...req.body });
    res.json({ Product: newProduct, message: "product is successfully added..." });
};

exports.updateProduct = async (req, res) => {
    let id = req.query.productID;
    let Updtproduct = await productService.getProductById(id);
    if (!Updtproduct) {
        res.json({ message: "Product is Not Found..." });
    }
    Updtproduct = await productService.updateProduct(id, { ...req.body });
    res.json({ Updtproduct, message: "Product is Updated...." });
};

exports.deleteProduct = async (req, res) => {
    let id = req.query.productID;
    let dltProduct = await productService.getProductById(id);
    if (!dltProduct) {
        res.json({ message: "Product is Not Found..." });
    }
    dltProduct = await productService.updateProduct(id, { isDelete: true });
    // products.splice(index, 1)
    res.json({ dltProduct, message: "Product is Deleted...." });
};
