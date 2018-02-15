// console.log('Connection to back-end models successful');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BidSchema =  new mongoose.Schema({
    user: String,
    bid_amt: {
        type: Number,
        required: [true, 'The bid amount must be a number'],
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    _product: { type: Schema.Types.ObjectId, ref: 'Products' },
});

module.exports = mongoose.model('Bids', BidSchema);
