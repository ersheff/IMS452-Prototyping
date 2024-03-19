// run the following command to install express and socket.io: npm install express socket.io
// when testing on your own computer, run the server with the command: node server.js

// these lines import the express library and create an express app
const express = require("express");
const app = express();
app.use(express.static("./"));

// these lines create an http server and bind the express app to it
const http = require("http");
const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Listening on port ${port}.`));

// these lines create a socket.io server and bind it to the http server
const { Server } = require("socket.io");
const io = new Server(server);

//

let likes = 0;

io.on("connection", socket => {

    console.log(`New user connected: ${socket.id}`);

    // respond to incoming chat messages
    socket.on("chat-to-server", message => {
        io.emit("chat-from-server", message);
    });

    // respond to incoming likes
    socket.on("like", () => {
        likes++;
        io.emit("like-tally", likes);
    });

});