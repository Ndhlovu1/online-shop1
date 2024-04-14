const express = require('express')
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopRouter = require('./routes/shop')
const path = require('path')
const rootDir = require('./util/path')

//Register express as a method
const app = express()


//Register a Parser before the middleware declarations - Html data instead of others
app.use(bodyParser.urlencoded({extended:false}))

//Render Static files - Not handled by Express
app.use(express.static(path.join(rootDir,'public')))

app.use('/admin',adminRoutes.router)

app.use(shopRouter.router)

//404 ERROR 

app.use((req,res,next)=>{
    //const img_url = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.geeksforgeeks.org%2Ferror-404-not-found%2F&psig=AOvVaw32LPuR0UuHiBVp37xmdzsf&ust=1713129484518000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOj2yYaPwIUDFQAAAAAdAAAAABAE"
    // res.status(404).send("<center><h1>404 PAGE NOT FOUND</h1></center>")
    res.sendFile(path.join(rootDir,'views','404.html'))
})

app.listen(9000)


