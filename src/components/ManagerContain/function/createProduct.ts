import { notify } from "@/functions/notifications";
import { IDataProduct } from "../interface";
import { INewProductData } from "@/interface";
import { addProduct } from "@/services/api";

/* eslint-disable-next-line */
export const createProduct = (data: IDataProduct, handleData: Function, clearProduct: Function, setRequestIsLoading: Function) => {
    setRequestIsLoading(true)
    if (data.title === "") {
        handleData({...data, trySendErro: true})
        notify("warning", "Erro,", "Não foi possível fazer login preencha o nome do produto")
        setRequestIsLoading(false)
        return false
    }
    if (data.description === "") {
        handleData({...data, trySendErro: true})
        notify("warning", "Erro,", "Não foi possível fazer login preencha a descrição do produto")
        setRequestIsLoading(false)
        return false
    }
    if (data.price === "") {
        handleData({...data, trySendErro: true})
        notify("warning", "Erro,", "Não foi possível fazer login preencha o preço do produto")
        setRequestIsLoading(false)
        return false
    }
    if (data.category === 0) {
        handleData({...data, trySendErro: true})
        notify("warning", "Erro,", "Não foi possível fazer login preencha a categoria do produto")
        setRequestIsLoading(false)
        return false
    }

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

    addProduct(dataForm).then(value => {
        if (value) {
            handleData({...data, trySendErro: false});
            clearProduct()
            notify("success", "Sucesso,", "Produto foi cadastrado com sucesso!")
            return true
        }
        notify("danger", "Erro desculpe,", "não foi possível cadastrar o produto!")
        return false
    }).catch(() => {
        notify("danger", "Erro desculpe,", "não foi possível cadastrar o produto!")
        return false
    }).finally(() => setRequestIsLoading(false))
}
