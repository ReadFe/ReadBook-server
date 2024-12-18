const router = require('express').Router();
const multer = require('multer');
const os = require('os');

const productController = require('./controller');
const { police_check } = require('../../middlewares');

router.get('/',
    productController.index
);

router.post('/', 
    multer({dest: os.tmpdir()}).single('image_url'),
    police_check('create', 'Product'),
    productController.store
);
router.put('/:id', 
    multer({dest: os.tmpdir()}).single('image_url'), 
    police_check('update', 'Product'),
    productController.update
);
router.delete('/:id',
    police_check('delete', 'Product'), 
    productController.destroy
);
router.get('/:id',
    productController.view
);

module.exports = router;