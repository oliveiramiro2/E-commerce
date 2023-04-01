import axios from "axios"

import { IDataApi } from "@/interface"

/* const base_url = "https://fakestoreapi.com/" */
const base_url = "https://api.escuelajs.co/api/v1"


const api = axios.create({
    baseURL: base_url,
})

export const allProjects = async (): Promise<IDataApi[] | undefined> => {
    const { data }: {data: IDataApi[] | undefined} = await api.get("/products")
    return data
}

export const bestOffers = async (): Promise<IDataApi[] | undefined> => {

    const data = await Promise.all([
        api.get("/products/?categoryId=1"),
        api.get("/products/?categoryId=2"),
        api.get("/products/?categoryId=3")
    ])

    const response: IDataApi[] | IDataApi = [
        data[0].data[0], data[1].data[0], data[2].data[0]
    ]

    return response
}
