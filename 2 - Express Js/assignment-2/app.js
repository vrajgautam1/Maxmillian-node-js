//-1 path and express
const path = require('path');
const express = require("express")
const app = express()


//-2 body-parser
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))

//-3 routes 
const usersRoutes = require("./routes/users")
const homepageRoutes = require("./routes/homepage")

//-4 static css pages
app.use(express.static(path.join(__dirname, 'public')))

//-5 use the routes
app.use(usersRoutes)
app.use(homepageRoutes)

//-5.1 404 page
app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname,"views", "404notfound.html"))
})

//-6 start the server
app.listen(3000, ()=>{
    console.log("server is running at port no. 3000")
})