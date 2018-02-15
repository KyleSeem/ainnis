
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema =  new mongoose.Schema({
    product: String,
    bids: [{ bid_amt: Number, user: String }],
});

module.exports = mongoose.model('Products', ProductSchema);
