const { Schema, model } = require('mongoose');

const orderItemSchema = Schema({
    name: {
        type: String,
        minlength: [5, 'panjang nama makanan minimal 5 karakter'],
        required: [true, 'nama makanan harus diisi']
    },

    price: {
        type: Number,
        default: 0
    },

    qty: {
        type: Number,
        required: [true, 'qty harus diisi'],
        minlength: [1, 'panjang minimal qty adalah 1']
    },
    
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
 
    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }
});

module.exports = model('OrderItem', orderItemSchema);