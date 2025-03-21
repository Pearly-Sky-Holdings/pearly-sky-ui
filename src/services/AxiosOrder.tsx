import axios from "axios";
// const token = localStorage.getItem('token');

const instance = axios.create({
    baseURL: 'https://back.pearlyskyplc.com/api/',
    headers: {
        'Content-Type': 'application/json'
    }
    
});

export default instance;