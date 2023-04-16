import { SubmitErrorHandler } from "react-hook-form/dist/types";
import { FieldErrors } from "react-hook-form/dist/types/errors";

import { IloginValid, formProps } from "../interfaces";
import { notify } from "@/functions/notifications";
import { emailIsAvaliable, getLoginData, login, register } from "@/services/api";
import { IDataLoginUser, IDataRegisterUser, IDataUser, ILoginTokens } from "@/interface";
import { addTokens, removeTokens } from "@/services/localStorage";

export const loginValid = async ({
    data,
    setShowIconLoading,
    setAllUserData,
    setLogined,
    push,
    paramRedirect,
}: IloginValid) => {
    setShowIconLoading(true)

    if (data.type === undefined) {

        const dataForm: IDataLoginUser = {
            email: data.email,
            password: data.password,
        }

        login(dataForm)
            .then((dataToken: ILoginTokens) => {
                removeTokens()
                addTokens(dataToken)
                getLoginData(dataToken.access_token)
                    .then((dataLogin: IDataUser) => {
                        setAllUserData({...dataToken, ...dataLogin});
                        setLogined(true);
                        notify("success", "Bem-vindo,", "Login realizado com sucesso");
                        push(paramRedirect);
                    })
            })
            .catch(() => notify("danger", "Desculpe,", "Não foi possível realizar o login! As credenciais não conferem!"))
            .finally(() => setShowIconLoading(false))
        return
    }

    const emailVerify: {email: string} = {email: data.email}
    const emailIsAvaliableReturn = await emailIsAvaliable(emailVerify)
    if (emailIsAvaliableReturn) {
        notify("danger", "Desculpe,", "O email inserido já foi registrado!");
        setShowIconLoading(false);
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
            const dataForm1: IDataLoginUser = {
                email: dataForm.email,
                password: dataForm.password,
            }

            login(dataForm1)
                .then((dataToken: ILoginTokens) => {
                    removeTokens();
                    addTokens(dataToken);
                    setAllUserData({...dataToken, ...dataForm});
                    setLogined(true);
                    notify("success", "Bem-vindo,", "Login realizado com sucesso");
                    push(paramRedirect);
                })
        })
        .catch(() => notify("danger", "Desculpe,", "Não foi possível realizar o registro!"))
        .finally(() => setShowIconLoading(false))
};

export const loginInvalid: SubmitErrorHandler<formProps> = (data) => {
    notify("danger", "Desculpe,", `Não foi possível fazer o cadastro.
    \nOs dados estão incorretos ou faltando.
    \n ${data.email?.message || ''}
    \n ${data.name?.message || ''}
    \n ${data.password?.message || ''}
    \n ${data.confirmPassword?.message || ''}`);
};

export const errorMessage: Function = (error: FieldErrors<formProps>, index: number, registerUser: boolean) => {
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
