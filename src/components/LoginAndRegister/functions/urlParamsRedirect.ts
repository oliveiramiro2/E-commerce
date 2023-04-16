export const urlParamsRedirect: Function = (param: string): string | undefined => {
    if (param === "") {
        return undefined
    } 
    return `?redirecionar=${param.split("redirecionar=")[1]}`
}
