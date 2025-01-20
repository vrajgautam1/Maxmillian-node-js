const path = require("path")
const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const adminRoutes = require("./routes/admin") //here we are simply importing the functions in adminjs
const shopRoutes = require("./routes/shop")

app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname, 'public')))

app.use("/admin", adminRoutes)

app.use(shopRoutes)


app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, "views", "404-not-found.html"))
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})

