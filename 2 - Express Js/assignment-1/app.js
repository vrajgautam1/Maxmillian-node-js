const express = require('express');
const app = express();

app.use("/users", (req, res, next) =>{
    res.send(`<h1>Welcome to the users page</h1>`)
    console.log("in the users page")
})

app.use("/", (req, res, next) =>{
    res.send(`<h1>Welcome to the homepage</h1>`)
    console.log("in the homepage page")
})

app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})