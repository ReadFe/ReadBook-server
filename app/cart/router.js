const router = require('express').Router();
const { police_check } = require('../../middlewares');
const cartController = require('./controller');


router.put(
    '/', 
    police_check('update', 'Cart'),
    cartController.update
)

router.get(
    '/',
    police_check('read', 'Cart'),
    cartController.index
)

router.delete(
    '/:id',
    police_check('delete', 'Cart'),
    cartController.destroy
)

module.exports = router; 