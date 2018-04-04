const express = require('express');
const app = express();
//const http = require("http").Server(app);
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const redisPubSub = require('./redis_connection');

app.get("/", (req, res) => {
    res.send("Websocket is running");
});

io.on("connection", socket => {

    socket.on("initiate-search", data => {
        redisPubSub.emit("research", { data });
    });

    redisPubSub.on("search-completed", (data, channel) => {
        
        socket.emit("results-found", {
            user: data.user,
            message: data.message,
            results: data.results
        });
    });
});

http.listen(8080, () => {
    console.log("Websocket running on port 8080");
});
