//Handles Creation of products
const express = require('express')

const path = require('path')

const router = express.Router() //Used for creating routes

const rootDir = require('../util/path')

// GET : /admin/add-product 
router.get('/add-product',(req,res,next)=> {
    console.log('/ Running ...')
    // res.send("<center><h1>WELCOME HOME</h1></center>")
    //res.send('<form action="/admin/add-product" method="POST"> <input type="text" name="title"> <button type="submit">Add Product</button></form>')
    res.sendFile(path.join(rootDir,'views','add-product.html'))
})

router.post('/add-product', (req,res,next) => {
    //Extract the data that was sent
    console.log(req.body)

    //Redirect the response
    res.redirect('/')

})



module.exports = {
    router
}
