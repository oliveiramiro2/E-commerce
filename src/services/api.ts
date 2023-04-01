import axios from "axios"

/* const base_url = "https://fakestoreapi.com/" */
const base_url = "https://api.escuelajs.co/api/v1"


export const api = axios.create({
    baseURL: base_url,
})
