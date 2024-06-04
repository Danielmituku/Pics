import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID FqGUAJP9NLkVRyy0v0cbGvzhFnnEmrgPHttXMZQW-Ys'
    }
})