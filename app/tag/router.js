const router = require('express').Router();

const {police_check} = require('../../middlewares')
const tagController = require('./controller')

router.get('/tags', 
    tagController.index
);

router.post('/tags',
    police_check('create', 'Product'),
    tagController.store
);

router.put('/tags/:id',
    police_check('update', 'Product'),
    tagController.update
);

router.delete('/tags/:id',
    police_check('delete', 'Product'),
    tagController.destroy
);

module.exports = router;