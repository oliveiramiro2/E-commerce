import { IDataCategory } from "../interface";
import { editCategory } from "@/services/api";
import { notify } from "@/functions/notifications";
import { leftSomeInfoCategory } from "./leftSomeInfoCategory";

export const editTheCategory = async (
    data: IDataCategory,
    handleData: Function,
    setRequestIsLoading: Function,
    editId: number,
    setProductEdited: Function,
    /* eslint-disable-next-line */
): Promise<boolean> => {

    const leftInfo = leftSomeInfoCategory(data.name, handleData, false)

    if (!leftInfo) return leftInfo;

    setRequestIsLoading(true)

    const response = await editCategory(editId, data.name)
    if (response) {
        setProductEdited(true)
        handleData(data.name, false)
        setTimeout(() => {
            setProductEdited(false)
            handleData('', false)
        }, 1500)
        notify("success", "Sucesso,", "Categoria foi editado com sucesso!")
        setRequestIsLoading(false)
        return response
    }
    notify("danger", "Erro desculpe,", "não foi possível editar o categoria!")
    setRequestIsLoading(false)
    return false
}
