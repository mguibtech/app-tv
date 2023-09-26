import axios from "axios";

export const client = axios.create({
    baseURL: "https://api.tvmaze.com"
});


client.interceptors.request.use((config) => {
    console.log("💻 Request: ", `${config.baseURL}${config.url}`);

    return config;
});

