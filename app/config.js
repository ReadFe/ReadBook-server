const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
module.exports = {
    rootPath: path.resolve(__dirname, '..'),
    secretkey: process.env.SECRET_KEY
}