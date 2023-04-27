export interface IDataProduct {
    title: string;
    description: string;
    price: string;
    category: number;
    trySendErro: boolean;
}

export interface IPropsAddEditProduct {
    add: boolean;
    dataProduct: IDataProduct;
    handleSingle: Function;
    cleanData: Function;
    closeModal: Function;
    requestIsLoading: boolean;
    setRequestIsLoading: Function;
    setIdNewItem: Function;
}
