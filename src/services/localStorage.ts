import { ILoginTokens } from "@/interface"

export const removeTokens: Function = (): void => {
    localStorage.removeItem("tokens");
}

export const addTokens: Function = (tokens: ILoginTokens): void => {
    localStorage.setItem("tokens", JSON.stringify(tokens));
}

export const getTokens: Function = (): ILoginTokens | false => {
    const response = localStorage.getItem("tokens");
    if (response === null) return false
    return JSON.parse(response)
}
