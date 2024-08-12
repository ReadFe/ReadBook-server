const router = require('express').Router();

const productRoute = require('./app/product/router');
const categoryRoute = require('./app/category/router');
const tagRoute = require('./app/tag/router');
const deliveryAddressRoute = require('./app/deliveryAddress/router');
const orderRoute = require('./app/order/router');
const invoiceRoute = require('./app/invoice/router');
const cartRoute = require('./app/cart/router');

router.use("/products", productRoute);
router.use("/categories", categoryRoute);
router.use("/tags", tagRoute);
router.use("/delivery-addresses", deliveryAddressRoute);
router.use("/cart", cartRoute);
router.use("/orders", orderRoute);
router.use("/invoices", invoiceRoute);

module.exports = router;