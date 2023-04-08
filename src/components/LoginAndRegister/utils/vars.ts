import { IInputs } from "../interfaces";

export const inputsDataRegister: IInputs[] = [
    {id: 0, label: 'Nome', name: 'name', placeholder: 'Digite seu nome', type: 'text'},
    {id: 1, label: 'Email', name: 'email', placeholder: 'Digite seu email', type: 'email'},
    {id: 2, label: 'Senha', name: 'password', placeholder: 'Digite sua senha', type: 'password'},
    {id: 3, label: 'Confirme sua senha', name: 'confirmPassword', placeholder: 'Repita sua senha', type: 'password'},
]

export const inputsDataLogin: IInputs[] = [
    {id: 0, label: 'Email', name: 'email', placeholder: 'Digite seu email', type: 'email'},
    {id: 1, label: 'Senha', name: 'password', placeholder: 'Digite sua senha', type: 'password'},
]
