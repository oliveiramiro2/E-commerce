import { SubmitErrorHandler, SubmitHandler } from "react-hook-form/dist/types";
import { FieldErrors } from "react-hook-form/dist/types/errors";

import { formProps } from "../interfaces";
import { notify } from "@/functions/notifications";

export const loginValid: SubmitHandler<formProps> = (data) => {
    console.log(data)
    notify("success", "Bem-vindo,", "Cadastro realizado com sucesso");
};

export const loginInvalid: SubmitErrorHandler<formProps> = (data) => {
    console.log(data, 'aaa')
    notify("danger", "Desculpe,", "Não foi possível fazer o cadastro");
};

export const errrorMessage: Function = (error: FieldErrors<formProps>, index: number, register: boolean) => {
    let returnValue: boolean | string = false

    try {
        if (register) {
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
