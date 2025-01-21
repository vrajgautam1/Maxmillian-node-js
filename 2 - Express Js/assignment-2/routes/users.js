const path = require('path');
const express = require('express')

const rootDir = require("../util/path")
const router = express.Router()

router.get("/users", (req, res, next)=>{
    res.sendFile(path.join(rootDir,"views", "users.html"))
})
router.post("/users", (req, res, next)=>{
    let firstname = req.body.uName
    let lastname = req.body.uSname
    console.log(firstname, lastname)
    res.redirect("/")
})

module.exports = router