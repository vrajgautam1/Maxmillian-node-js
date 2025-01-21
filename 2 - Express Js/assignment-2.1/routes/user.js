const path = require("path");
const express = require("express")

const router = express.Router()

const getFullPathAkaRootDir = require("../util/path")

router.get("/user", (req, res, next)=>{
    res.sendFile(path.join(getFullPathAkaRootDir ,"views", "user.html"))
})

router.post("/user", (req, res, next)=>{
    let firstName = req.body.firstName
    console.log(firstName)
    res.redirect("/")
})

module.exports = router