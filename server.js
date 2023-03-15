// Importing the http module
const http = require("http")

// Creating server
const server = http.createServer((req, res) => {
    // Sending the response
    res.write("This is deployed by github actions and restarted by PM2 ....")
    res.end();
})

// Server listening to port 3000.
server.listen((3000), () => {
    console.log("Server is Running");
})