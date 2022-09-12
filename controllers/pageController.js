import Product from '../models/Products.js'

const getIndexPage = (req, res) => {
    res.render('index')
}

const getLoginPage = (req, res) => {
    res.render('login')
}
const getAdminPage = (req, res) => {
    res.render('admin')
}
const getAllIndexProducts = async (req, res) => {
    try {
     const products = await Product.find({}).lean();
     res.status(200).render('index' , {products});
    } catch (error) {
     res.status(500).json({
         succeded: false,
         error
     })
    }
 }

export { getIndexPage, getLoginPage , getAdminPage ,getAllIndexProducts }