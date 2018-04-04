const express = require('express');
const app = express();
//const http = require("http").Server(app);
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const redisPubSub = require('./redis_connection');

io.on("connection", socket => {
    let formData;

    socket.on("initiate-search", data => {
        formData = data;
    });

    socket.emit("results-found", result => {

    });
});

http.listen(8080, () => {
    console.log("Server running on port 8080");
});
