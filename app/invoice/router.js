const router = require('express').Router();
const { police_check } = require('../../middlewares');
const invoiceController = require('./controller');


router.get(
    '/:order_id',
    police_check('read', 'Invoice'),
    invoiceController.show
)

module.exports = router; 