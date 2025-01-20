const path = require('path');
const express = require("express")
const router = express.Router()

router.get("/", (req, res, next)=>{
    res.sendFile(path.join(__dirname,"../" ,"views", "shop.html"))
}) 

//so basically when i was using the router.use it was automatically sending me to the homepage. 
//u know when nothing goes right fallback to the default code of homepage. 
//but now after typing get. we are being specfic that if and only if url === "/" && method === "GET". just dont randomly send to the homepage 

module.exports = router;