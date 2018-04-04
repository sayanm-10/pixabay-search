const redisPubSub = require('./redis_connection');
const axios = require('axios');

const API_KEY = "8581998-3db6f5ebd0207596e722932e3";

redisPubSub.on("research", async (data, channel) => {
    let results = await searchPixabay(data.query);
    
    redisPubSub.emit("search-completed", {results});
});

const searchPixabay = async (query) => {
    query = encodeURIComponent(query);
    let baseUrl = "https://pixabay.com/api/";
    let queryString = `?key=${API_KEY}&q=${query}&image_type=photo`;
    let url = `${baseUrl}${queryString}`;
    let results = await axios.get(url);

    return results;
};