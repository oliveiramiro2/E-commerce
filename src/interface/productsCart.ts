import { IDataApi } from "./dataApiProduct";

export interface IContextCartData {
    cartData: IDataApi[];
    setCartData: Function;
}
