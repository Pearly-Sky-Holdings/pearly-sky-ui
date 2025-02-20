import axios from "axios";
// const token = localStorage.getItem('token');

const instance = axios.create({
    baseURL: 'http://82.112.242.202/api/',
    headers: {
        'Content-Type': 'application/json'
    }
    
});

export default instance;