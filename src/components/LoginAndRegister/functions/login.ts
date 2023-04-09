import { SubmitErrorHandler, SubmitHandler } from "react-hook-form/dist/types";
import { FieldErrors } from "react-hook-form/dist/types/errors";

import { formProps } from "../interfaces";
import { notify } from "@/functions/notifications";
import { emailIsAvaliable, register } from "@/services/api";
import { IDataRegisterUser } from "@/interface";

export const loginValid: SubmitHandler<formProps> = async (data) => {
    if (data.type === undefined) {
        return
    }

    const emailVerify: {email: string} = {email: data.email}
    const emailIsAvaliableReturn = await emailIsAvaliable(emailVerify)
    if (emailIsAvaliableReturn) {
        notify("danger", "Desculpe,", "O email inserido já foi registrado!");
        return
    }

    const dataForm: IDataRegisterUser = {
        email: data.email,
        name: data.name,
        password: data.password,
        role: data.type ? "admin" : "customer",
        avatar: `https://api.lorem.space/image/face?w=${Math.round(
            Math.random() * window.innerWidth) + 50}&amp;amp;amp;amp;h=${Math.round(
            Math.random() * window.innerWidth) + 50}`,
    }

    register(dataForm)
        .then(() => {
            notify("success", "Bem-vindo,", "Cadastro realizado com sucesso");
        })
        .catch(() => notify("danger", "Desculpe,", "Não foi possível realizar o registro!"))
};

export const loginInvalid: SubmitErrorHandler<formProps> = (data) => {
    notify("danger", "Desculpe,", `Não foi possível fazer o cadastro.
    \nOs dados estão incorretos ou faltando.
    \n ${data.email?.message || ''}
    \n ${data.name?.message || ''}
    \n ${data.password?.message || ''}
    \n ${data.confirmPassword?.message || ''}`);
};

export const errrorMessage: Function = (error: FieldErrors<formProps>, index: number, registerUser: boolean) => {
    let returnValue: boolean | string = false

    try {
        if (registerUser) {
            switch(index){
                case 0:
                    if (error?.name?.message !== undefined) returnValue = error?.name?.message
                    return returnValue
                case 1:
                    if (error?.email?.message !== undefined) returnValue = error?.email?.message
                    return returnValue
                case 2:
                    if (error?.password?.message !== undefined) returnValue = error?.password?.message
                    return returnValue
                case 3:
                    if (error?.confirmPassword?.message !== undefined) returnValue = error?.confirmPassword?.message
                    return returnValue
                default:
                    return returnValue;
            }
        }
        switch(index){
            case 0:
                if (error?.email?.message !== undefined) returnValue = error?.email?.message
                return returnValue
            case 1:
                if (error?.password?.message !== undefined) returnValue = error?.password?.message
                return returnValue
            default:
                return returnValue;
        }
    } catch {
        return returnValue
    }
}
