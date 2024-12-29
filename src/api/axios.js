import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://f865-2806-263-c488-84-35bc-7eff-cb2-7782.ngrok-free.app/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;