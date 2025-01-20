const path = require('path');
const express =  require("express")

const rootDir = require('../util/path');

const router = express.Router()

router.get("/add-product", (req, res, next)=>{
    res.sendFile(path.join(rootDir,"views", "add-product.html"))
})

//when user client sends a request to the server. the server sends back a response and not a request
//so req.redirect() does not make sense
router.post("/add-product", (req, res, next)=>{
    let product = req.body.productName
    console.log(product)
    res.redirect('/')
})

module.exports = router