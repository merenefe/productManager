import mongoose from 'mongoose'

const productsSchema = mongoose.Schema({
    title: {type: String, required: true},
    description : {type: String, required: true},
    price : {type: String, required: true},
    date: {type: Date, default:Date.now}
})

const Product = mongoose.model('Product', productsSchema)
export default Product;