import express from 'express'
import expressHbs  from 'express-handlebars'
import dotenv from 'dotenv'
import mongoose  from 'mongoose'
import bodyParser from 'body-parser'
const app = express()
import pageRoute from './routes/pageRoute.js'
import productsRoute from './routes/productsRoute.js'
dotenv.config()


const conn = mongoose.connect(process.env.DB_URI, {
    dbName: 'kbmproductmanager'
}).then(() => {
    console.log("Connected to the DB")
}).catch(error => {
    console.log(`Error: ${error}`)
})

conn

app.use(express.static('public'));

app.engine('handlebars', expressHbs.engine({
    layoutsDir: 'views/layouts/',
    defaultLayout: null,
    extname: 'handlebars'
  })
);

app.set('view engine', 'handlebars');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// //routes

app.use('/' , pageRoute);
app.use('/admin' , productsRoute);








app.listen(3000) 