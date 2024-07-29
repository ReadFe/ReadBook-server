const router = require('express').Router();

const {police_check} = require('../../middlewares')
const deliveryAddressController = require('./controller')

router.get('/delivery-address', 
    deliveryAddressController.index
);

router.post('/delivery-address',
    police_check('create', 'DeliveryAddress'),
    deliveryAddressController.store
);

router.put('/delivery-address/:id',
    police_check('update', 'DeliveryAddress'),
    deliveryAddressController.update
);

router.delete('/delivery-address/:id',
    police_check('delete', 'DeliveryAddress'),
    deliveryAddressController.destroy
);

module.exports = router;