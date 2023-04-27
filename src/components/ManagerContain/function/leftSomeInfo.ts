import { notify } from "@/functions/notifications"
import { IDataProduct } from "../interface"


export const leftSomeInfo = (data: IDataProduct, handleData: Function, add: boolean): boolean => {
    const msg = add ? "adicionar" : "editar";
    if (data.title === "") {
        handleData({...data, trySendErro: true})
        notify("warning", "Erro,", `Não foi possível ${msg} o produto preencha o nome do produto`)
        return false
    }
    if (data.description === "") {
        handleData({...data, trySendErro: true})
        notify("warning", "Erro,", `Não foi possível ${msg} o produto preencha a descrição do produto`)
        return false
    }
    if (data.price === "") {
        handleData({...data, trySendErro: true})
        notify("warning", "Erro,", `Não foi possível ${msg} o produto preencha o preço do produto`)
        return false
    }
    if (data.category === 0) {
        handleData({...data, trySendErro: true})
        notify("warning", "Erro,", `Não foi possível ${msg} o produto preencha a categoria do produto`)
        return false
    }

    return true;
}
