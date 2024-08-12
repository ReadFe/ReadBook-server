const router = require('express').Router();

const {police_check} = require('../../middlewares')
const deliveryAddressController = require('./controller')

router.get('/', 
    police_check('view', 'DeliveryAddress'),
    deliveryAddressController.index
);

router.post('/',
    police_check('create', 'DeliveryAddress'),
    deliveryAddressController.store
);

router.put('/:id',
    police_check('update', 'DeliveryAddress'),
    deliveryAddressController.update
);

router.delete('/:id',
    police_check('delete', 'DeliveryAddress'),
    deliveryAddressController.destroy
);

module.exports = router;