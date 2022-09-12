import express from 'express'
import {getIndexPage, getLoginPage , getAdminPage, getAllIndexProducts} from '../controllers/pageController.js'
import * as productController from '../controllers/productController.js'
const router = express.Router()



router.route('/').get(getAllIndexProducts)
// router.route('/login').get(getLoginPage)

export default router;