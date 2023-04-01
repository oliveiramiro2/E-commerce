import axios from "axios"

const base_url = ""

export const api = axios.create({
    baseURL: base_url,
})
