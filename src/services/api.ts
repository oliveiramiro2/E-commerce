import axios from "axios"

import {
    ICategoryApi,
    IDataApi,
    IDataLoginUser,
    IDataRegisterUser,
    IDataUser,
    IEditProduct,
    ILoginTokens,
    INewCategoryData,
    INewProductData
} from "@/interface"
import { notify } from "@/functions/notifications"

/* const base_url = "https://fakestoreapi.com/" */
const base_url = "https://api.escuelajs.co/api/v1"


const api = axios.create({
    baseURL: base_url,
})

// products
export const allProductsWithoutParam = async (): Promise<IDataApi[] | undefined> => {
    const { data }: {data: IDataApi[] | undefined} = await api.get(`/products`)
    return data
}

export const allProducts = async (offset: number = 0, filter: string = ""): Promise<IDataApi[] | undefined> => {
    const numberInPage: number = 12;

    const { data }: {data: IDataApi[] | undefined} = await api.get(`/products?limit=${numberInPage}&offset=${offset * numberInPage}${filter}`)
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

export const buyProduct = async (productId: number): Promise<IDataApi | undefined> => {
    const { data }: {data: IDataApi | undefined} = await api.get(`/products/${productId}`)
    return data
}

export const deleteProduct = async (productId: number): Promise<boolean> => {
    const { data }: {data: boolean} = await api.delete(`/products/${productId}`)
    return data
}

export const addProduct = async (dataForm: INewProductData): Promise<boolean | number> => {
    const { status, data } = await api.post(`/products/`, dataForm)
    if (status === 201) {
        return data.id
    }
    return false
}

export const editProduct = async (productId: number, dataForm: IEditProduct): Promise<boolean> => {
    const { status } = await api.put(`/products/${productId}`, dataForm)
    return status === 200
}

// categories

export const categories = async (param: string) => {
    const { data }: {data: ICategoryApi[] & ICategoryApi | undefined} =
        await api.get(`/categories${param}`)
    return data
}

export const deleteCategory = async (categoryId: number): Promise<boolean> => {
    const { data }: {data: boolean} = await api.delete(`/categories/${categoryId}`)
    return data;
}

export const addCategory = async (dataForm: INewCategoryData): Promise<boolean> => {
    const { data, status } = await api.post(`/categories`, dataForm)
    if (status === 201) {
        return data.id
    }
    return false
}

export const editCategory = async (categoryId: number, name: string): Promise<boolean> => {
    const { status } = await api.put(`/categories/${categoryId}`, name)
    return status === 200
}

// user register
export const emailIsAvaliable = async (email: {email: string}): Promise<boolean> => {
    const {data} = await api.post(`/users/is-available`, email)
    return data.isAvailable
}

export const register = async (dataForm: IDataRegisterUser): Promise<IDataUser> => {
    const {data, status} = await api.post(`/users`, dataForm)
    if (status !== 201) notify("danger", "Desculpe,", "Não foi possível realizar o registro!")
    return data
}

// login
export const login = async (dataForm: IDataLoginUser): Promise<ILoginTokens> => {
    const { data } = await api.post(`/auth/login`, dataForm)
    return data
}

export const getLoginData = async (token: string): Promise<IDataUser> => {
    const { data } = await api.get(`/auth/profile`, {
        headers: {Authorization: `Bearer ${token}`}
    })
    return data
}

export const getNewRefreshToken = async (token: string): Promise<ILoginTokens> => {
    const { data } = await api.get(`/auth/refresh-token`, {
        headers: {Authorization: `Bearer ${token}`}
    })
    return data
}

// edit profile
export const editUserProfile = async (id: number, dataForm: IDataRegisterUser): Promise<IDataUser> => {
    const { data } = await api.put(`/users/${id}`, dataForm)
    return data
}
