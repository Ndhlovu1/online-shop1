//This will be seen by the user
const express = require('express')
//Import the Path core module
const path = require('path')

const router = express.Router()

const rootDir = require('../util/path')


router.get('/',(req,res,next) => {
    console.log("Landing Page ...")
    // res.send("<center><h1>ONE STOP SHOP</h1></center>")
    //next()
    res.sendFile(path.join(rootDir,'views','shop.html'))//dirname always holds the absolute path
})

module.exports = {
    router
}

