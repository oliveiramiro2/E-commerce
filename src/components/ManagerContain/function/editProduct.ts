import { IEditProduct } from "@/interface";
import { IDataProduct } from "../interface";
import { leftSomeInfo } from "./leftSomeInfo";
import { editProduct } from "@/services/api";
import { notify } from "@/functions/notifications";

export const editTheProduct = async (
    data: IDataProduct,
    handleData: Function,
    clearProduct: Function,
    setRequestIsLoading: Function,
    editId: number,
    setProductEdited: Function
    /* eslint-disable-next-line */
): Promise<boolean> => {

    const leftInfo = leftSomeInfo(data, handleData, false)

    if (!leftInfo) return leftInfo;

    setRequestIsLoading(true)
    const dataForm: IEditProduct = {
        categoryId: data.category,
        description: data.description,
        price: Number(data.price),
        title: data.title,
    }

    const response = await editProduct(editId, dataForm)
    if (response) {
        setProductEdited(true)
        handleData({...data, trySendErro: false})
        setTimeout(() => {
            setProductEdited(false)
            clearProduct()
        }, 1500)
        notify("success", "Sucesso,", "Produto foi editado com sucesso!")
        setRequestIsLoading(false)
        return response
    }
    notify("danger", "Erro desculpe,", "não foi possível editar o produto!")
    setRequestIsLoading(false)
    return false
}
