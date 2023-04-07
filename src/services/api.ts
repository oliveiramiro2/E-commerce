import axios from "axios"

import { ICategoryApi, IDataApi } from "@/interface"

/* const base_url = "https://fakestoreapi.com/" */
const base_url = "https://api.escuelajs.co/api/v1"


const api = axios.create({
    baseURL: base_url,
})

// products

export const allProducts = async (): Promise<IDataApi[] | undefined> => {
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

// categories

export const categories = async (param: string) => {
    const { data }: {data: ICategoryApi[] & ICategoryApi | undefined} =
        await api.get(`/categories${param}`)
    return data
}

// user
export const emailIsAvaliable = async (email: string) => {
    const {data} = await api.post(`/users/is-available`, email)
    return data.isAvailable
}

export const register = async (param: string, dataForm: any) => {
    await api.post(`/users${param === "" ? "" : "/1"}`, dataForm)
}

// login
export const login = async (dataForm: any) => {
    const { data } = await api.post(`/auth/login`, dataForm)
    return data
}
