import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://guess-the-song-joe9.onrender.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;