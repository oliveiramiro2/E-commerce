import axios from "axios"

/* const base_url = "https://fakestoreapi.com/" */
const base_url = "https://api.escuelajs.co/api/v1"


const api = axios.create({
    baseURL: base_url,
})

export const allProjects = async () => {
    const { data } = await api.get("/products")
    return data
}
