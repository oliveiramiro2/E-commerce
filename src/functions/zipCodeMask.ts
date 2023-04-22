export const zipCodeMask = (value: string) => {
    if (!value) return ""
    let aux = value;
    aux = aux.replace(/\D/g,'')
    aux = aux.replace(/(\d{5})(\d)/,'$1-$2')
    return aux
}
