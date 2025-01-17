const http = require("http");
const routes = require("./routes"); // Import the dataHandler function
const dataHandler = routes.handler

const server = http.createServer(dataHandler); // Pass the function as the request listener

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});

