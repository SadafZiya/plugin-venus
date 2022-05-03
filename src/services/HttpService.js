import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/items"
axios.defaults.headers.patch['Content-Type'] = 'application/json; charset=UTF-8';

const http = {
    get: axios.get,
    patch: axios.patch,
}
export default http;