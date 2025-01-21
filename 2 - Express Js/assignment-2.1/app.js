const path = require("path")
const express = require("express")
const app = express()

const bodyParser = require("body-parser") //bodyParser is like a middleware similar to routes we create hence the app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname, "public"))) //so public taru ahiya access thhay gayu. ane have public pachi no path tare pela badha css ma nakhvano.

const homeRoute = require("./routes/home")
const userRoute = require("./routes/user")

app.use(homeRoute);
app.use(userRoute)

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
})

app.listen(3000, ()=>{
    console.log("server is running on port no. 3000")
})