import { notify } from "@/functions/notifications";
import { IDataCategory } from "../interface";
import { INewCategoryData } from "@/interface";
import { addCategory } from "@/services/api";
import { leftSomeInfoCategory } from "./leftSomeInfoCategory";

export const createProduct = async (
        data: IDataCategory,
        handleData: Function,
        clearProduct: Function,
        setRequestIsLoading: Function,
        setIdNewItem: Function
    ) => {
    const leftInfo = leftSomeInfoCategory(data.name, handleData, true)

    if (!leftInfo) return leftInfo;

    setRequestIsLoading(true)
    const dataForm: INewCategoryData = {
        name: data.name,
        image: "https://loremflickr.com/320/240/product"
    }

    const response = await addCategory(dataForm)
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
