import { notify } from "@/functions/notifications";
import { IDataProduct } from "../interface";

export const createProduct = (data: IDataProduct, handleData: Function) => {
    if (data.title === "") {
        handleData({...data, trySendErro: true});
        notify("warning", "Erro,", "Não foi possível fazer login preencha o nome do produto");
        return
    }
    if (data.description === "") {
        handleData({...data, trySendErro: true});
        notify("warning", "Erro,", "Não foi possível fazer login preencha a descrição do produto");
        return
    }
    if (data.price === "") {
        handleData({...data, trySendErro: true});
        notify("warning", "Erro,", "Não foi possível fazer login preencha o preço do produto");
        return
    }
    if (data.category === 0) {
        handleData({...data, trySendErro: true});
        notify("warning", "Erro,", "Não foi possível fazer login preencha a categoria do produto");
        return
    }

    handleData({...data, trySendErro: false});
    notify("success", "Sucesso,", "Produto foi cadastrado com sucesso!")
}
