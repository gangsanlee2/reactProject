import axios from "axios";
const server = `http://localhost:8000`
export const iris = req => axios.get(`${server}/shop/flower/iris`, req)
