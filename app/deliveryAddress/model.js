const mongoose = require('mongoose');
const {model, Schema} = mongoose;

const deliveryAddressSchema = Schema({
    nama: {
        type: String,
        maxlength: [255, 'panjang nama kategori maksimal 255 karakter'],
        required: [true, 'nama alamat harus di isi']
    },
    kelurahan: {
        type: String,
        maxlength: [255, 'panjang nama kategori maksimal 255 karakter'],
        required: [true, 'nama alamat harus di isi']
    },
    kecamatan: {
        type: String,
        maxlength: [255, 'panjang nama kategori maksimal 255 karakter'],
        required: [true, 'nama alamat harus di isi']
    },
    kabupaten: {
        type: String,
        maxlength: [255, 'panjang nama kategori maksimal 255 karakter'],
        required: [true, 'nama alamat harus di isi']
    },
    provinsi: {
        type: String,
        maxlength: [255, 'panjang nama kategori maksimal 255 karakter'],
        required: [true, 'nama alamat harus di isi']
    },
    detail: {
        type: String,
        maxlength: [255, 'panjang nama kategori maksimal 255 karakter'],
        required: [true, 'nama alamat harus di isi']
    },
    user: {
        type: Schema.Types.ObjectId,
        href: 'User'
    },
}, {timestamps: true})

module.exports = model('DeliveryAddress', deliveryAddressSchema )
