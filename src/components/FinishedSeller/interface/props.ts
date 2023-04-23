export interface IPropsFinished {
    close: Function;
    allItemsCart: boolean;
    cartId: number | undefined;
    buyFromCart: boolean;
    priceBuying: number;
    numberItems: number;
    setNewPriceCart: Function;
    setRemovePrice: Function;
}
