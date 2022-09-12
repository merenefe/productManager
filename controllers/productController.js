import Product from '../models/Products.js'

const createProduct = async (req, res) => {
   try {
    const product = await Product.create(req.body);
    res.status(200).redirect('/admin')
   } catch (error) {
    res.status(500).json({
        succeded: false,
        error
    })
   }
}

const getAllProducts = async (req, res) => {
    try {
     const products = await Product.find({}).lean();
     res.status(200).render('admin' , {products});
    } catch (error) {
     res.status(500).json({
         succeded: false,
         error
     })
    }
 }

 const deleteProducts = async (req, res) => {
    try {
     const products = await Product.findOneAndRemove({_id : req.params.id});
     res.status(200).redirect('/admin');
    } catch (error) {
     res.status(500).json({
         succeded: false,
         error
     })
    }
 }
 
 const updateProduct = async (req, res) => {
    try {
     const products = await Product.findOneAndUpdate({_id : req.params.id}, {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
     });
    //  res.status(200).redirect('/admin');
    } catch (error) {
     res.status(500).json({
         succeded: false,
         error
     })
    }
 }
 

export { createProduct, getAllProducts ,deleteProducts, updateProduct }