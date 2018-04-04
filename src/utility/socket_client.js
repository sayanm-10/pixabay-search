const io = require('socket.io-client');
const WS_URL = "http://localhost:8080";

let socket;

export const openConnection = () => {
    return new Promise((resolve, reject) => {
        socket = io(WS_URL);
        
        socket.on("results-found", results => {
          //dispatch(userJoined(user)); need to return data to react app
          console.log("Socket client heard back!");
          console.log("Final Results :", results);
        });
    
        socket.on("connect", resolve);
    });
};

export const searchPixabay = formData => {
    socket.emit("initiate-search", formData);
};