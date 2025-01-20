const express = require("express");
const app = express();
const routes = require("./routes"); // Import the dataHandler function
const dataHandler = routes.handler

app.use("/add-product", (req, res, next)=>{
    console.log("In the add-product middleware")
    res.send(`<h1>The add product page</h1>`)
})

app.use("/", (req, res, next)=>{
    console.log("In the homePage middleware")
    res.send(`<h1>Hello from ExpressJs HomePage</h1>`)
})

app.listen(3000, ()=>{
    console.log("Server running at http://localhost:3000/");
})





// --old vanilla node js

// const server = http.createServer(app); // Pass the function as the request listener, here we can also pass app because (express()) which is a function but also a valid reuest handler

// server.listen(3000, () => {
//     console.log("Server running at http://localhost:3000/");
// });

