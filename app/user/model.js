const mongoose = require('mongoose');
const {Schema, model} = mongoose;
const AutoIncrement = require('mongoose-sequence')(mongoose);
const bcrypt = require('bcrypt')

let userSchema = Schema({
    full_name: {
        type: String,
        minlength: [3, 'panjang nama user minimal 3 karakter'],
        maxlength: [255, 'panjang nama user maksimal 255 karakter'],
        required: [true, 'nama user harus di isi']
    },
    customer_id: {
        type: Number
    },
    email: {
        type: String,
        maxlength: [255, 'panjang email maksimal 255 karakter'],
        required: [true, 'email harus di isi']
    },
    password: {
        type: String,
        maxlength: [255, 'panjang email maksimal 255 karakter'],
        required: [true, 'email harus di isi']  
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    token: [String]
}, {timestamps : true});

userSchema.path('email').validate(function(value) {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(value);
  }, attr => `${attr.value} harus merupakan email yang valid!` );

userSchema.path('email').validate(async function(value) {
    try {
        const count = await this.model('User').countDocuments({email: value});
        return !count;
    } catch (error) {
        throw error
    }
  }, attr => `${attr} sudah terdaftar!` );

const HASH_ROUND = 10;
userSchema.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, HASH_ROUND);
    next()
});

userSchema.plugin(AutoIncrement, {inc_field: 'customer_id'});

module.exports = model('User', userSchema)