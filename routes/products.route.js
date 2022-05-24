const {Router} = require('express');
const { productController } = require('../controllers/products.controller');

const router = Router();

router.get('/products', productController.getProduct)
router.get('/products/:id', productController.getProductId) 
router.post('/products', productController.postProduct)
router.delete('/products/:id', productController.deleteproductId)





module.exports = router