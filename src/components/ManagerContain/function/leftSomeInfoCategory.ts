import { notify } from "@/functions/notifications";

export const leftSomeInfoCategory = (name: string, handleData: Function, add: boolean): boolean => {
    const msg = add ? "adicionar" : "editar";
    if (name === "") {
        handleData({name, trySendErro: true})
        notify("warning", "Erro,", `Não foi possível ${msg} o categoria preencha o nome do categoria`)
        return false
    }

    return true;
}
