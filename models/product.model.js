const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    price: Number,
    brand: String,
    "5G_connectivity": Boolean,
    description: String,
    category: [{
        type: String
    }],
    isDelete: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('products', productSchema);