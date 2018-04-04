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
        redisPubSub.emit("research", {query: data.query});
    });

    redisPubSub.on("search-completed", (data, channel) => {
        const results = data.results;
        socket.emit("results-found", {
            user: formData.name,
            message: formData.message,
            results: results
        });
    });
});

http.listen(8080, () => {
    console.log("Server running on port 8080");
});
