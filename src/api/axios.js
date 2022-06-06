import axios from "axios";
const BASE_URL = 'http://127.0.0.1:3000' //https://vehicle-server-rewidle.herokuapp.com

export default axios.create({
    baseURL: BASE_URL
})

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type' : 'application/json'},
    withCredentials: true
})