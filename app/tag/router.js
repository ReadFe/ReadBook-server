const router = require('express').Router();

const {police_check} = require('../../middlewares')
const tagController = require('./controller')

router.get('/', 
    tagController.index
);

router.post('/',
    police_check('create', 'Product'),
    tagController.store
);

router.put('/:id',
    police_check('update', 'Product'),
    tagController.update
);

router.delete('/:id',
    police_check('delete', 'Product'),
    tagController.destroy
);

module.exports = router;