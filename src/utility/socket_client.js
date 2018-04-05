//import App from '../App';
const io = require('socket.io-client');
const WS_URL = "http://localhost:8080";

let socket;

export const openConnection = (cb) => {
    return new Promise((resolve, reject) => {
        socket = io(WS_URL);

        socket.on("results-found", results => cb(null, results));
        socket.on("connect", resolve);
    });
};

export const searchPixabay = formData => {
    socket.emit("initiate-search", formData);
};