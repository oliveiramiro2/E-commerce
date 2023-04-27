import { notify } from "@/functions/notifications";
import { IDataProduct } from "../interface";
import { INewProductData } from "@/interface";
import { addProduct } from "@/services/api";
import { leftSomeInfo } from "./leftSomeInfo";

/* eslint-disable-next-line */
export const createProduct = async (
        data: IDataProduct,
        handleData: Function,
        clearProduct: Function,
        setRequestIsLoading: Function,
        setIdNewItem: Function
    ) => {

    const leftInfo = leftSomeInfo(data, handleData, true)

    if (!leftInfo) return leftInfo;

    setRequestIsLoading(true)
    const dataForm: INewProductData = {
        categoryId: data.category,
        description: data.description,
        price: Number(data.price),
        title: data.title,
        images: [
            "https://loremflickr.com/320/240/product",
            "https://loremflickr.com/320/240/product",
            "https://loremflickr.com/320/240/product"
        ]
    }

    const response = await addProduct(dataForm)
    if (response !== false) {
        setIdNewItem(response)
        handleData({...data, trySendErro: false});
        setTimeout(() => {
            setIdNewItem(0)
            clearProduct()
        }, 1500)
        notify("success", "Sucesso,", "Produto foi cadastrado com sucesso!")
        setRequestIsLoading(false)
        return response
    }
    notify("danger", "Erro desculpe,", "não foi possível cadastrar o produto!")
    setRequestIsLoading(false)
    return false
}
