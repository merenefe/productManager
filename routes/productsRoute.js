import express from 'express';
import * as productController from '../controllers/productController.js'
const router = express.Router()


router.route('/').post(productController.createProduct)
router.route('/').get(productController.getAllProducts)

router.route('/delete/:id').get(productController.deleteProducts)
// router.route('/update/:id').get(productController.updateProduct)





export default router;