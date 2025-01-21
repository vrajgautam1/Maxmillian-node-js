const path = require("path");
const express = require("express")

const router = express.Router()

const getFullPathAkaRootDir = require("../util/path")

router.get("/", (req, res, next)=>{
    
        res.sendFile(path.join(getFullPathAkaRootDir, "views", "index.html"))
    
    
    console.log(req.url, req.headers["sec-ch-ua"].includes("Google Chrome"))
})

module.exports = router