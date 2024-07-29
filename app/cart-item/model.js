const { Schema, model } = require('mongoose');

const cartItemSchema = Schema({
    name: {
        type: String,
        minlength: [5, 'panjang nama makanan minimal 5 karakter'],
        required: [true, 'nama makanan harus diisi']
    },

    qty: {
        type: Number,
        required: [true, 'qty harus diisi'],
        minlength: [1, 'panjang minimal qty adalah 1']
    },

    price: {
        type: Number,
        default: 0
    },

    image_url: String,

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
});

module.exports = model('CartItem', cartItemSchema);