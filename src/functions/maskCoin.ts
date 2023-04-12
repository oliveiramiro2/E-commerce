export const MaskCoin = (value: number) => {
    const format = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return format
}
