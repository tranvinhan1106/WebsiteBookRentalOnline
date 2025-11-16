// import axios from "axios";

// const axiosInstance = axios.create({
//     baseURL: "http://localhost:8080",
//     withCredentials: true
// });

// axiosInstance.interceptors.request.use(config => {
//     const token = localStorage.getItem('token');
//     if (token) {
//         config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
// }, error => {
//     return Promise.reject(error);
// });

// export default axiosInstance;
import axios from 'axios';

// Cấu hình baseURL của Spring Boot
const API_BASE_URL = "http://localhost:8080"; 

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,

    withCredentials: true 
});

export default axiosInstance;