const redisPubSub = require('./redis_connection');
const axios = require('axios');

const API_KEY = "8581998-3db6f5ebd0207596e722932e3";

redisPubSub.on("research", async (data, channel) => {
    let results = await searchPixabay(data);
    
    redisPubSub.emit("search-completed", {results});
});

const searchPixabay = async (formData) => {
    const query = encodeURIComponent(formData.data.query);
    const baseUrl = "https://pixabay.com/api/";
    const queryString = `?key=${API_KEY}&q=${query}&image_type=photo`;
    const url = `${baseUrl}${queryString}`;
    const results = await axios.get(url);
    const response = {
        user: formData.data.user,
        message: formData.data.message,
        results: results.data
    }

    return response;
};