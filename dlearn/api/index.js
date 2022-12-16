import axios from "axios";
const server = `http://localhost:8000`
export const getFashion = id => axios.get(`${server}/dlearn/fashion?id=${id}`)
export const postFashion = req => axios.post(`${server}/dlearn/fashion`, req)